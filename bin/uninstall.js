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

util.getPaths()
  .then(function(paths) {

    const package = util.safeRequire(paths.packageFile);
    const name = package ? package.name : path.basename(paths.package);

    if (package) {

      if (package.eslintConfig) {
        delete package.eslintConfig.extends;
      }

      if (Object.keys(package.eslintConfig).length === 0) {
        delete package.eslintConfig;
      }

      fs.writeFileSync(paths.packageFile, JSON.stringify(package, null, 2));
    }

    const config = util.safeRequire(paths.hookconfig);

    if (config) {
      delete config[name];

      if (Object.keys(config).length === 0) {
        fs.unlink(paths.hookconfig);
      } else {
        fs.writeFileSync(paths.hookconfig, JSON.stringify(config, null, 2));
      }
    }

    const dest  = path.resolve(gitHome, '.git/hooks/pre-commit');
    try {
      const flag = 'Installed by eslint-config-smartcar';
      const file = fs.readFileSync(dest).toString();

      // hook exists and was installed by this module
      if (file.indexOf(flag) >= 0) {
        fs.unlink(dest);
      }
    } catch (e) {
      // no hook exists
    }
  });
