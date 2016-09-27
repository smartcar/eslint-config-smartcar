'use strict';

var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var process = require('process');

var cwd = process.cwd();

var isSubModule = (/node_modules.*node_modules/).test(cwd);
if (isSubModule) {
  return;
}

try {
  var gitOutput = exec('git rev-parse --show-toplevel 2> /dev/null');
} catch (e) {
  return;
}

var gitHome = path.resolve(gitOutput.toString().replace(/\n/, ''));
var projectDir = path.resolve(cwd, '../../');

var name;
try {
  name = require(projectDir + '/project.json').name;
} catch (e) {
  name = path.basename(projectDir);
}

var config;
var configPath = gitHome + '/lint_config.json';
try {
  config = require(configPath);
} catch(e) {
  config = {};
}

config[name] = projectDir;
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

var copyCommand = process.platform === 'win32' ? 'copy' : 'cp';
try {
  var source = path.resolve(cwd, 'bin/pre-commit.hook');
  var dest  = path.resolve(gitHome, '.git/hooks/pre-commit');
  exec([copyCommand, source, dest].join(' '));
} catch (e) {
  console.log(e);
}

console.log('gitHome', gitHome);
console.log('projectDir', projectDir);
console.log('projectName', name);
