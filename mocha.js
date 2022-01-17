'use strict';

module.exports = {
  env: {
    mocha: true,
  },
  overrides: [
    {
      files: ['test/**'],
      rules: {
        'no-invalid-this': 'off',
      },
    },
  ],
  plugins: ['mocha'],
  rules: {
    'mocha/handle-done-callback': 'error',
    'mocha/max-top-level-suites': ['error', { limit: 1 }],
    'mocha/no-exclusive-tests': 'warn',
    'mocha/no-exports': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-hooks': 'off',
    'mocha/no-hooks-for-single-case': 'off',
    'mocha/no-identical-title': 'error',
    'mocha/no-mocha-arrows': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'warn',
    'mocha/no-return-and-callback': 'off', // mocha has this built-in
    'mocha/no-return-from-async': 'error',
    'mocha/no-setup-in-describe': 'off', // too many false positives
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-skipped-tests': 'warn',
    'mocha/no-synchronous-tests': 'off',
    'mocha/no-top-level-hooks': 'error',
    'mocha/prefer-arrow-callback': 'off',
    'mocha/valid-suite-description': 'off',
    'mocha/valid-test-description': 'off',
    'mocha/no-async-describe': 'error',
    'mocha/no-empty-description': 'error',
  },
};
