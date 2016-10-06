'use strict';

const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;
const process = require('process');

const cwd = process.cwd();

var isSubModule = (/node_modules.*node_modules/).test(cwd);
if (isSubModule) {
  return;
}

try {
  var gitOutput = exec('git rev-parse --show-toplevel', {
    stdio: ['ignore', null, 'ignore'],
  });
} catch (e) {
  return;
}

const gitHome = path.resolve(gitOutput.toString().replace(/[\n\r]+/, ''));
const projectDir = path.resolve(cwd, '../../');
const packagePath = path.resolve(projectDir, 'package.json');

var name;
try {
  var packageFile = require(packagePath);

  // Add in eslintconfig if package.json exists
  packageFile.eslintConfig = packageFile.eslintConfig || {};
  packageFile.eslintConfig.extends = 'smartcar';

  packageFile.scripts = packageFile.scripts || {};
  packageFile.scripts.lint = packageFile.scripts.lint || 'eslint .';

  fs.writeFileSync(packagePath, JSON.stringify(packageFile, null, 2));
  name = packageFile.name;
} catch (e) {
  name = path.basename(projectDir);
}

// add .eslintcache to gitignore
const gitignorePath = path.resolve(gitHome, '.gitignore');
try {
  const gitignore = fs.readFileSync(gitignorePath).toString();

  if (gitignore.indexOf('.eslintcache') < 0) {
    fs.appendFile(gitignorePath, '.eslintcache');
  }
} catch (e) {
  fs.writeFile(gitignorePath, '.eslintcache');
}

// Read in the config file, edit and write it back
var config;
const configPath = gitHome + '/.git/hooks/lint_config.json';
try {
  config = require(configPath);
} catch(e) {
  config = {};
}

config[name] = {
  linter: path.resolve(projectDir, 'node_modules/.bin/eslint'),
  wd: projectDir,
};
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

// Bail if a pre-commit hook exists that wasn't installed by this module
const dest  = path.resolve(gitHome, '.git/hooks/pre-commit');
try {
  const flag = 'Installed by eslint-config-smartcar';
  const file = fs.readFileSync(dest).toString();

  // hook exists and was not installed by this module
  if (file.indexOf(flag) < 0) {
    console.log('Precommit hook already exists, skipping install...');
    return;
  }
} catch (e) {
  // no hook exists
}

// Copy the actual hook file
try {
  const source = path.resolve(cwd, 'bin/pre-commit.hook');
  exec(`cp ${source} ${dest}`);
} catch (e) {
  console.error('Failed to install precommit hook');
  console.error(e.message);
}
