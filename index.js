'use strict';

module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: 'eslint:recommended',
  rules: {
    // Possible Errors
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off', // TDOO this rule needs to be spec'd out more
    'valid-typeof': 'error',

    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'warn',
    'block-scoped-var': 'off',
    'complexity': 'error',
    'consistent-return': 'off',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'warn',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'off',  // ES6 rule
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off', // Doesn't work with Promise.bind()
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': ['error', {builtinGlobals: true}],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'radix': ['error', 'as-needed'],
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside'],
    'yoda': ['error', 'never', {exceptRange: true}],
    'strict': ['error', 'safe'],

    // Variables
    'init-declarations': 'off',
    'no-catch-shadow': 'off', // < IE8 rule
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', {vars: 'all', args: 'after-used'}],
    'no-use-before-define': ['error', {functions: false, classes: true}],

    // nodejs & commonjs
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // Style
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'camelcase': ['error', {properties: 'always'}],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': ['error', 'unix'],
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': ['error', 2, {SwitchCase: 1 }],
    'jsx-quotes': 'off', // JSX related rule
    'key-spacing': ['error', {beforeColon: false, afterColon: true, mode: 'strict'}],
    'keyword-spacing': ['error', {before: true, after: true}],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'max-depth': ['error', 4],
    'max-len': ['warn', {
      code: 80,
      comments: 100,
      ignoreUrls: true,
      ignorePattern: '^\\s*.+=\\s*(require|rewire)\\s*\\('
    }],
    'max-lines': 'off',
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 6],
    'max-statements': 'off',
    'max-statements-per-line': ['error', {max: 2}],
    'new-cap': ['error', {newIsCap: true, capIsNew: false}],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': ['warn', {ignoreChainWithDepth: 3}],
    'no-array-constructor': 'error',
    'no-bitwise': 'warn',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {max: 3, maxEOF: 1}],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'ClassDeclaration', 'ClassExpression'],
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {skipBlankLines: false}],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['off', {multiline: true}],  // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-property-newline': ['error', {allowMultiplePropertiesPerLine: true}],
    'object-curly-spacing': ['error', 'never', {objectsInObjects: false, arraysInObjects: false}],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'before', {'overrides': {'=': 'after', '+': 'ignore'}}],
    'padded-blocks': 'off',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'require-jsdoc': 'off',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {before: false, after: true}],
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {words: true, nonwords: false}],
    'spaced-comment': ['error', 'always'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'error',

    // ES6
    'arrow-body-style': ['error', 'as-needed', {requireReturnForObjectLiteral : true}],
    'arrow-parens': 'off',
    'arrow-spacing': ['error', {'before': true, 'after': true}],
    'constructor-super': 'off', // classes are disabled
    'generator-star-spacing': ['error', {before: false, after: true}],
    'no-class-assign': 'off', // classes are disabled
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'off', // classes are disabled
    'no-duplicate-imports': 'off', //  imports are not used
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'off', // classes are disabled
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off', // classes are disabled
    'no-useless-rename': 'error',
    'no-var': 'off',
    'object-shorthand': ['error', 'properties'],
    'prefer-arrow-callback': 'off',
    'prefer-const': ['error', {destructuring: 'all'}],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'require-yield': 'error',
    'rest-spread-spacing':  ['error', 'never'],
    'sort-imports': 'off', // imports not used
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', {before: false, after: true}],
  },
};
