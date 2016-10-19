'use strict';

const path = require('path');
const process = require('process');
const proc = require('child_process');
const SUB_MODULE_REGEX = /node_modules.*node_modules/;

const util = {};

const cwd = process.cwd();

util.exec = function(command) {
  return new Promise(function(resolve, reject) {
    proc.exec(command, function(error, stdout, stderr) {
      if (error) reject(error);
      else resolve(stdout);
    });
  })
  .catch(function(err) {

    switch(err.code) {
      case 127:
        // command not found
        break;
      case 128:
        // not in git repo
        break;
      default:
        throw err;
    }

  });
};

util.isSubModule = function(dir) {
  dir = dir || cwd;
  return SUB_MODULE_REGEX.test(dir);
};

util.safeRequire = function(file) {
  try {
    return require(file);
  }
};

util.getGitRoot = function() {
  return util.exec('git rev-parse --show-toplevel')
    .then(function(stdout) {
      return path.resolve(stdout.trim());
    });
};

util.getPaths = function() {
  return util.getGitRoot()
    .then(function() {
      const paths = {};

      paths.root = root;
      paths.rootignore = path.resolve(root, '.gitignore');

      paths.hook = path.resolve(root, '.git/hooks/pre-commit');
      paths.hookconfig = path.resolve(root, '.git/hooks/lint_config.json');

      paths.package = path.resolve(cwd, '../../');
      paths.packageFile = path.resolve(paths.package, 'package.json');
      paths.linter = path.resolve(paths.package, 'node_modules/.bin/eslint');

      paths.hookTemplate = path.resolve(cwd, 'bin/pre-commit.js');

      return paths;
    });
};

module.exports = util;
