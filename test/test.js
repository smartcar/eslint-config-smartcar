'use strict';

const test = require('ava');
const eslint = require('eslint');
const tempWrite = require('temp-write');
const isPlainObj = require('is-plain-obj');

const config = require('../');

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf)),
  });

  return linter.executeOnText(str).results[0].messages;
}

test('main', function(t) {
  t.true(isPlainObj(config));
  t.true(isPlainObj(config.rules));

  const errors = runEslint('\'use strict\';\nconsole.log("unicorn")\n', config);
  t.is(errors[0].ruleId, 'no-console');
});
