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

  if (packageFile.eslintConfig) {
    delete packageFile.eslintConfig.extends;
  }

  fs.writeFileSync(packagePath, JSON.stringify(packageFile, null, 2));
  name = packageFile.name;
} catch (e) {
  name = path.basename(projectDir);
}

// Read in the config file, edit and write it back
var config;
const configPath = gitHome + '/.git/hooks/lint_config.json';
try {
  config = require(configPath);
} catch(e) {
  config = {};
}

delete config[name];
if (Object.keys(config).length === 0) {
  fs.unlink(configPath);
} else {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

const dest  = path.resolve(gitHome, '.git/hooks/pree-commit');
try {
  const flag = 'Installed by eslint-config-smartcar';
  const file = fs.readFileSync(dest).toString();

  // hook exists and was installed by this module
  if (file.indexOf(flag) >= 0)
    fs.unlink(dest);
  }
} catch (e) {
  // no hook exists
}
