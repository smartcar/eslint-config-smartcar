'use strict';

const { join } = require('path');

const allEslintRules = require('all-eslint-rules');
const eslint = require('eslint');
const isPlainObj = require('is-plain-obj');
const test = require('ava');
const difference = require('lodash.difference');

const prettierRules = {
  ...require('eslint-config-prettier').rules,
  ...require('eslint-config-prettier/unicorn').rules,
};

const config = require('..');

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

  t.is(errors[0].ruleId, 'padding-line-between-statements');
  t.is(errors[1].ruleId, 'no-console');
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
      key in prettierRules,
      `${key} should not be marked as off because of prettier`
    );
  });
});

test('all available rules are defined', (t) => {
  const available = allEslintRules();
  const defined = Object.keys(config.rules);
  t.deepEqual(difference(available, defined), []);
});

test('no extra rules are defined', (t) => {
  const available = allEslintRules().sort();
  const defined = Object.keys(config.rules).sort();
  t.deepEqual(difference(defined, available), []);
});
