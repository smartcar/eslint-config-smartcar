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

var gitHome = path.resolve(gitOutput.toString());
var projectDir = path.resolve(cwd, '../../');

var name;
try {
  name = require(projectDir + '/project.json').name;
} catch (e) {
  name = path.basename(projectDir);
}

// TODO create config file and write to it, copy over the hook
console.log('gitHome', gitHome);
console.log('projectDir', projectDir);
console.log('projectName', name);
