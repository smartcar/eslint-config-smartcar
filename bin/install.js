'use strict';

const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;
const process = require('process');

const util = require('./util');

const paths = {};

if (util.isSubModule()) {
  return;
}

util.exec('npm root').then(console.log)
util.getPaths()
  .then(function(paths) {

    const promises = [];

    const pack = util.safeRequire(paths.packageFile);
    const name = pack ? pack.name : path.basename(paths.package);

    if (pack) {
      pack = Object.assign({
        scripts: {lint: 'eslint . --cache'}
      }, pack, {
        eslintConfig: {extends: 'smartcar'},
      });

      promises.push(util.write(packPath, JSON.stringify(pack, null, 2)));
    }

   // add .eslintcache to gitignore
    try {
      const gitignore = fs.readFileSync(paths.gitignore).toString();

      if (gitignore.indexOf('.eslintcache') < 0) {
        fs.appendFile(paths.gitignore, '.eslintcache');
      }
    } catch (e) {
      fs.writeFile(paths.gitignore, '.eslintcache');
    }
    // Read in the config file, edit and write it back
    const config = util.safeRequire(paths.hookconfig) || {};

    config[name] = {
      linter: path.resolve(projectDir, 'node_modules/.bin/eslint'),
      wd: projectDir,
    };

    fs.writeFileSync(paths.hookconfig, JSON.stringify(config, null, 2));

    // Bail if a pre-commit hook exists that wasn't installed by this module
    try {
      const flag = 'Installed by eslint-config-smartcar';
      const file = fs.readFileSync(paths.hook).toString();

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

    return Promise.all(promises);
  });

