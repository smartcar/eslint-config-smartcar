'use strict';

/**
 * eslint-plugin-lodash
 *
 * @see https://github.com/wix/eslint-plugin-lodash
 */
module.exports = {
  plugins: ['lodash'],
  settings: {
    lodash: { pragma: '_' },
  },
  rules: {
    // Possible Errors
    'lodash/callback-binding': 'error',
    'lodash/collection-method-value': 'error',
    'lodash/collection-return': 'error',
    'lodash/no-double-unwrap': 'error',
    'lodash/no-extra-args': 'error',
    'lodash/no-unbound-this': 'error',
    'lodash/unwrap': 'error',

    // Stylistic Issues
    'lodash/chain-style': ['error', 'explicit'],
    'lodash/chaining': ['error', 'always'],
    'lodash/collection-ordering': [
      'error',
      { method: 'sortBy', useArray: 'as-needed' },
    ],
    'lodash/consistent-compose': ['error', 'flow'],
    'lodash/identity-shorthand': ['error', 'always'],
    'lodash/import-scope': 'off',
    'lodash/matches-prop-shorthand': [
      'error',
      'always',
      { onlyLiterals: false },
    ],
    'lodash/matches-shorthand': [
      'error',
      'always',
      3, // maximum path length
      true, // include computed properties
      { onlyLiterals: false },
    ],
    'lodash/no-commit': 'error',
    /**
     * Enable this rule when the following issue is resolved:
     * https://github.com/wix/eslint-plugin-lodash/issues/219
     *
     * TODO [eslint-plugin-lodash@>6.0.0]
     */
    'lodash/path-style': 'off',
    'lodash/prefer-compact': 'error',
    'lodash/prefer-filter': ['error', 5],
    'lodash/prefer-find': 'error',
    'lodash/prefer-flat-map': 'error',
    'lodash/prefer-immutable-method': 'warn',
    'lodash/prefer-invoke-map': 'error',
    'lodash/prefer-map': 'error',
    'lodash/prefer-reject': ['error', 5],
    'lodash/prefer-thru': 'error',
    'lodash/prefer-wrapper-method': 'error',
    'lodash/preferred-alias': 'error',
    'lodash/prop-shorthand': ['error', 'always'],

    // Preference over native
    'lodash/prefer-constant': 'error',
    'lodash/prefer-get': ['error', 3],
    'lodash/prefer-includes': 'off', // use `unicorn/prefer-includes`
    'lodash/prefer-is-nil': 'error',
    'lodash/prefer-lodash-chain': 'error',
    'lodash/prefer-lodash-method': 'off', // too opinionated
    'lodash/prefer-lodash-typecheck': 'off', // too opinionated
    'lodash/prefer-matches': ['error', 3],
    'lodash/prefer-noop': 'error',
    'lodash/prefer-over-quantifier': 'error',
    'lodash/prefer-some': ['error', { includeNative: true }],
    'lodash/prefer-startswith': 'off', // use `unicorn/prefer-starts-ends-with`
    'lodash/prefer-times': 'error',
  },
};
