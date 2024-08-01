'use strict';

const { readdirSync } = require('fs');
const { basename, extname, join } = require('path');

const { ESLint } = require('eslint');
const isPlainObj = require('is-plain-obj');
const test = require('ava');
const difference = require('lodash.difference');

const pkg = require('../package.json');

const prettierRules = {
  ...require('eslint-config-prettier').rules
};

const configs = readdirSync('.')
  .filter(function (file) {
    const blacklist = ['release.config.js', '.eslintrc.js', '.prettierrc.js'];
    return extname(file) === '.js' && !blacklist.includes(file);
  })
  .map(function (file) {
    const name = basename(file, '.js');
    return { name, config: require(join('..', file)) };
  });

configs.forEach(function ({ name, config }) {
  test(`${name} - type check`, t => {
    t.true(isPlainObj(config));
    t.true(isPlainObj(config.rules));
  });

  test(`${name} - included in package`, t => {
    const files = pkg.files;
    t.assert(
      files.includes(name + '.js'),
      `${name} config not defined as a published file`,
    );
  });

  test(`${name} - rule definitions`, t => {
    const cli = new ESLint({
      baseConfig: config,
      useEslintrc: false,
    });

    cli.lintText('');

    const rules = {
      available: [],
      defined: Object.keys(config.rules).sort(),
    };

    for (const [ruleName, rule] of cli.getRules()) {
      if (rule.meta && rule.meta.deprecated) {
        continue;
      }

      /**
       * All config files other than index won't define any of the core rules, so
       * if we are testing a non-index config file we want to filter out any non-plugin
       * provided rules
       */
      const PLUGIN_RULE_RE = /@?[\w-]+\//u;
      if (name !== 'index' && !PLUGIN_RULE_RE.test(ruleName)) {
        continue;
      }

      rules.available.push(ruleName);
    }

    t.deepEqual(
      difference(rules.available, rules.defined),
      [],
      'missing definitions for the following rules:',
    );
    t.deepEqual(
      difference(rules.defined, rules.available),
      [],
      'the following rules should not be defined:',
    );
  });

  test(`${name} - prettier rules`, t => {
    const rules = Object.entries(config.rules);

    for (const [key, value] of rules) {
      // prettier rules are turned off by using 0 as opposed to
      // "off" for this test case
      if (value === 0) {
        t.true(
          key in prettierRules,
          `${key} should not be marked as off because of prettier`,
        );
      }

      if (value === 'off') {
        t.false(
          key in prettierRules,
          `${key} should be marked as off because of prettier`,
        );
      }
    }
  });

  test(`${name} - integration`, async t => {
    const fixtures = {
      ava: {
        code: "var ava = require('ava')",
        errors: ['ava/use-test'],
      },
      index: {
        code: "'use strict';\nconsole.log('unicorn')\n",
        errors: [
          'no-console',
          'padding-line-between-statements',
          'prettier/prettier',
        ],
      },
      lodash: {
        code: "_.uniq(arr, 'property');",
        errors: ['lodash/no-extra-args'],
      },
      mocha: {
        code: 'before(function () { /* ... */ });',
        errors: ['mocha/no-top-level-hooks'],
      },
    };

    const fixture = fixtures[name];
    t.assert(fixtures[name], `missing integration test fixture for ${name}`);

    const eslint = new ESLint({
      baseConfig: config,
      useEslintrc: false,
    });
    const [result] = await eslint.lintText(fixture.code);

    const ruleIds = result.messages.map(e => e.ruleId);
    t.deepEqual(ruleIds.sort(), fixture.errors.sort());
  });
});
