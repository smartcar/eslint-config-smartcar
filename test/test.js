'use strict';

var test = require('ava');
var eslint = require('eslint');
var tempWrite = require('temp-write');
var isPlainObj = require('is-plain-obj');

function runEslint(str, conf) {
  var linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

test('main', function(t) {
  var conf = require('../');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  var errors = runEslint('\'use strict\';\nconsole.log("unicorn")\n', conf);
  t.is(errors[0].ruleId, 'no-console');
});

test('browser', function(t) {
  var conf = require('../browser');

  t.true(isPlainObj(conf));

  var errors = runEslint('\'use strict\';\nprocess.exit();\n', conf);
  t.is(errors[0].ruleId, 'strict');
  t.is(errors[1].ruleId, 'no-process-exit');
});
