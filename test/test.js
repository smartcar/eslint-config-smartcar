'use strict';

const test = require('ava');
const eslint = require('eslint');
const tempWrite = require('temp-write');
const isPlainObj = require('is-plain-obj');

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

test('main', function(t) {
  const conf = require('../');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('\'use strict\';\nconsole.log("unicorn")\n', conf);
  t.is(errors[0].ruleId, 'no-console');
});

test('browser', function(t) {
  const conf = require('../browser');

  t.true(isPlainObj(conf));

  const errors = runEslint('\'use strict\';\nprocess.exit();\n', conf);
  t.is(errors[0].ruleId, 'strict');
  t.is(errors[1].ruleId, 'no-process-exit');
});
