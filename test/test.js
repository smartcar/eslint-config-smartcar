'use strict';

const allEslintRules = require('all-eslint-rules');
const eslint = require('eslint');
const eslintConfigPrettier = require('eslint-config-prettier');
const isPlainObj = require('is-plain-obj');
const test = require('ava');
const {join} = require('path');
const difference = require('lodash.difference');

const config = require('../');

test('type check', (t) => {
  t.true(isPlainObj(config));
  t.true(isPlainObj(config.rules));
});

test('integration', (t) => {
  const linter = new eslint.CLIEngine({
    configFile: join(process.cwd(), 'index.js'),
  });

  const code = '\'use strict\';\nconsole.log("unicorn")\n';
  const errors = linter.executeOnText(code).results[0].messages;

  t.is(errors[0].ruleId, 'no-console');
});

test('prettier rules', (t) => {
  const rules = Object.entries(config.rules);

  rules.forEach(([key, value]) => {
    // prettier rules are turned off by using 0 as opposed to
    // "off" for this test case
    if (value !== 0) {
      return;
    }

    t.true(
      key in eslintConfigPrettier.rules,
      `${key} should not be marked as off because of prettier`
    );
  });
});

test('no extra rules are defined', (t) => {
  const available = allEslintRules().sort();
  const defined = Object.keys(config.rules).sort();
  t.deepEqual(difference(defined, available), []);
});
