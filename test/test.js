/* eslint-disable n/global-require */
'use strict';

const { readdirSync } = require('node:fs');
const { basename, extname, join } = require('node:path');

const { ESLint } = require('eslint');
const isPlainObj = require('is-plain-obj');
const test = require('ava');
const difference = require('lodash.difference');

const pkg = require('../package.json');

const prettierRules = {
  ...require('eslint-config-prettier').rules,
  ...require('eslint-config-prettier/prettier').rules,
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
    const rules = {
      available: [],
      defined: Object.keys(config.rules).sort(),
    };

    /**
     * Adds rules defined by a plugin / code into the rules object above
     *
     * @param {Iterable<Pair<string, Rule>>} rulesEntries - iterable that produces 2
     * element arrays where the first element is rule name and second is the rule itself
     * e.g. the return value of Object.entries(rules)
     * @param {string} [pluginName=''] - name of the plugin that defines these rules
     */
    const pushRules = function (rulesEntries, pluginName = '') {
      for (let [ruleName, rule] of rulesEntries) {
        if (rule.meta?.deprecated) {
          continue;
        }

        // plugins define the unprefixed rule name, so we need to add the prefix
        if (pluginName) {
          ruleName = `${pluginName}/${ruleName}`;
        }

        rules.available.push(ruleName);
      }
    };

    config.plugins.forEach(function (pluginName) {
      const plugin = require(`eslint-plugin-${pluginName}`);

      pushRules(Object.entries(plugin.rules), pluginName);
    });

    /*
     * All config files other than index won't define any of the core rules, so
     * if we are testing a non-index config file we don't want to add the core rules
     */
    if (name === 'index') {
      pushRules(require('eslint/use-at-your-own-risk').builtinRules.entries());
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
