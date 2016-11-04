'use strict';

const path = require('path');
const process = require('process');
const proc = require('child_process');
const SUB_MODULE_REGEX = /node_modules.*node_modules/;

const util = {};

const cwd = process.cwd();

util.printColored = function(str, color, logger) {
  logger = logger || console.log;
  const prefix = "\x1B[" + color + "m[smartcar-lint]\x1B[0m ";
  logger(prefix + str);
};

util.exec = function(command) {
  return new Promise(function(resolve, reject) {
    proc.exec(command, function(error, stdout, stderr) {
      if (error) reject(error);
      else resolve(stdout);
    });
  })
};

util.isSubModule = function(dir) {
  dir = dir || cwd;
  return SUB_MODULE_REGEX.test(dir);
};

util.findGitDirectory = function() {
  return util
    .exec('git rev-parse --show-toplevel')
    .then(function(stdout) {
      return path.resolve(stdout.trim());
    })
    .catch(function(err) {
      var e = new Error();
      e.code = err.code;
      e.exitcode = 0;

      if (e.code === 127) {
        e.message = 'git is not installed';
      } else if (e.code === 128) {
        e.message = 'not inside git repository';
      } else {
        e.message = 'could not find git directory';
      }

      throw e;
    });
};

util.errorHandler = function(err) {

  var log = console.log;
  var color = 32; // blue
  var messagePrefix = 'skipping installation of precommit hook, ';

  if (err.exitcode > 0) {
    log = console.error;
    color = 31; // red
    messagePrefix = 'failed to install precommit hook, ';
  }

  if (err.message) {
    var message = messagePrefix + err.message;
    util.printColored(message, color, log);
  }

  return process.exit(err.exitcode);
}

module.exports = util;
