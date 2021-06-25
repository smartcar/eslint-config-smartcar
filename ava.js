'use strict';

/**
 * eslint-plugin-ava
 *
 * @see https://github.com/avajs/eslint-plugin-ava
 */
module.exports = {
  plugins: ['ava'],
  rules: {
    'ava/assertion-arguments': 'error',
    'ava/hooks-order': 'error',
    'ava/max-asserts': 'off',
    'ava/no-async-fn-without-await': 'off', // use `require-await`
    'ava/no-duplicate-modifiers': 'error',
    'ava/no-identical-title': 'error',
    'ava/no-ignored-test-files': 'error',
    'ava/no-import-test-files': 'error',
    'ava/no-incorrect-deep-equal': 'error',
    'ava/no-inline-assertions': 'error',
    'ava/no-nested-tests': 'error',
    'ava/no-only-test': 'warn',
    'ava/no-skip-assert': 'warn',
    'ava/no-skip-test': 'warn',
    'ava/no-todo-implementation': 'error',
    'ava/no-todo-test': 'warn',
    'ava/no-unknown-modifiers': 'error',
    'ava/prefer-async-await': 'error',
    'ava/prefer-power-assert': 'off',
    'ava/prefer-t-regex': 'error',
    'ava/test-title': 'error',
    'ava/test-title-format': 'off',
    'ava/use-t': 'error',
    'ava/use-t-throws-async-well': 'error',
    'ava/use-t-well': 'error',
    'ava/use-test': 'error',
    'ava/use-true-false': 'error',
  },
};
