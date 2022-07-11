'use strict';

// Using 0 instead of "off" so that the our tests can assert that only rules
// that prettier actually conflicts are marked as "prettier".
const PRETTIER = 0;

// Rules that should be evaluated once we enable modules
const ES_MODULES = 'off';

// Rules that apply to browser contexts
const BROWSER = 'off';

module.exports = {
  env: {
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'prettier', 'prettier/prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['test/**'],
      rules: {
        'node/global-require': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
  ],
  plugins: [
    'array-func',
    'eslint-comments',
    'import',
    'jsdoc',
    'no-use-extend-native',
    'n',
    'prettier',
    'promise',
    'sonarjs',
    'unicorn',
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        access: {
          message:
            'Prefer using @package, @private, @protected, or @public over @access, they are easier to read.',
        },

        // override defaults
        augments: 'extends',
        fires: 'emits',
      },
      preferredTypes: {
        // standard any type
        '*': 'any',
        'Any': 'any',

        // use A<B> over A.<B>
        '.': '<>',

        // Use A[] over Array<A>
        'Array<>': '[]',
      },
      overrideReplacesDoc: true,
      augmentsExtendsReplacesDocs: true,
      implementsReplacesDocs: true,
    },
  },
  rules: {
    // Possible Errors
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': PRETTIER,
    'no-extra-semi': PRETTIER,
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],
    'no-unused-private-class-members': 'error',
    'no-useless-backreference': 'error',
    'use-isnan': 'error',
    // https://github.com/eslint/eslint/issues/11899
    'require-atomic-updates': 'off',
    'valid-typeof': 'error',

    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': [
      'error',
      { allowImplicit: true, checkForEach: true },
    ],
    'block-scoped-var': 'error',
    'class-methods-use-this': ['error', { enforceForClassFields: true }],
    'complexity': 'error',
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': PRETTIER,
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'grouped-accessor-pairs': ['error', 'setBeforeGet'],
    'guard-for-in': 'warn',
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': PRETTIER,
    'no-global-assign': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
      },
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': PRETTIER,
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    // See (https://github.com/eslint/eslint/issues/12246) for rationale
    'no-return-await': 'off',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': ['error', { allowInParentheses: true }],
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'radix': ['error', 'as-needed'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'off',
    'wrap-iife': PRETTIER,
    'yoda': ['error', 'never', { exceptRange: true }],
    'strict': ['error', 'safe'],

    // Variables
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        destructuredArrayIgnorePattern: '^_',
        // This is hanedled by unicorn/prefer-optional-catch-binding
        caughtErrors: 'none',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],

    // Style
    'array-bracket-newline': PRETTIER,
    'array-bracket-spacing': PRETTIER,
    'array-element-newline': PRETTIER,
    'block-spacing': PRETTIER,
    'brace-style': PRETTIER,
    'camelcase': ['error', { properties: 'always' }],
    'capitalized-comments': 'off',
    'comma-dangle': PRETTIER,
    'comma-spacing': PRETTIER,
    'comma-style': PRETTIER,
    'computed-property-spacing': PRETTIER,
    'consistent-this': ['error', 'self'],
    'eol-last': PRETTIER,
    'func-call-spacing': PRETTIER,
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': PRETTIER,
    'function-paren-newline': PRETTIER,
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': PRETTIER,
    'indent': PRETTIER,
    'jsx-quotes': PRETTIER,
    'key-spacing': PRETTIER,
    'keyword-spacing': PRETTIER,
    'line-comment-position': 'off', // too opinionated
    'linebreak-style': PRETTIER,
    'lines-around-comment': PRETTIER,
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      {
        code: 80,
        comments: 90,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^\\s*(.+=\\s*(require|rewire)|test)\\s*\\(',
      },
    ],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 6],
    'max-statements': 'off',
    'max-statements-per-line': ['error', { max: 2 }],
    'multiline-comment-style': 'off',
    'multiline-ternary': PRETTIER,
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'new-parens': PRETTIER,
    'newline-per-chained-call': PRETTIER,
    'no-array-constructor': 'error',
    'no-bitwise': 'warn',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': PRETTIER,
    'no-multi-assign': ['error', { ignoreNonDeclaration: false }],
    'no-multiple-empty-lines': PRETTIER,
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-ternary': 'off',
    'no-tabs': [PRETTIER, { allowIndentationTabs: true }],
    'no-trailing-spaces': PRETTIER,
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': PRETTIER,
    'nonblock-statement-body-position': PRETTIER,
    'object-curly-newline': PRETTIER,
    'object-property-newline': PRETTIER,
    'object-curly-spacing': PRETTIER,
    'one-var': 'off',
    'one-var-declaration-per-line': PRETTIER,
    'operator-assignment': 'error',
    'operator-linebreak': PRETTIER,
    'padded-blocks': PRETTIER,
    'padding-line-between-statements': [
      'error',
      // force a newline after "use-strict"
      { blankLine: 'always', prev: 'directive', next: '*' },
      // force a newline after the last require statement
      { blankLine: 'always', prev: 'cjs-import', next: '*' },
      { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': PRETTIER,
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': PRETTIER,
    'semi-spacing': PRETTIER,
    'semi-style': PRETTIER,
    'sort-keys': 'off', // too opinionated
    'sort-vars': 'off',
    'space-before-blocks': PRETTIER,
    'space-before-function-paren': PRETTIER,
    'space-in-parens': PRETTIER,
    'space-infix-ops': PRETTIER,
    'space-unary-ops': PRETTIER,
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': PRETTIER,
    'template-tag-spacing': PRETTIER,
    'unicode-bom': PRETTIER,
    'wrap-regex': PRETTIER,

    // ES6
    'arrow-body-style': PRETTIER,
    'arrow-parens': PRETTIER,
    'arrow-spacing': PRETTIER,
    'constructor-super': 'error',
    'generator-star-spacing': PRETTIER,
    'no-class-assign': 'error',
    'no-confusing-arrow': [
      'error',
      { allowParens: false, onlyOneSimpleParam: false },
    ],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-new-symbol': 'error',
    'no-restricted-exports': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'properties'],
    'prefer-arrow-callback': PRETTIER,
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': 'off', // too opinionated
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': PRETTIER,
    'sort-imports': ES_MODULES,
    'symbol-description': 'error',
    'template-curly-spacing': PRETTIER,
    'yield-star-spacing': PRETTIER,

    //
    // PLUGINS
    //

    /**
     * eslint-plugin-array-func
     *
     * @see https://github.com/freaktechnik/eslint-plugin-array-func
     */
    'array-func/from-map': 'error',
    'array-func/no-unnecessary-this-arg': 'error',
    'array-func/prefer-array-from': 'error',
    'array-func/avoid-reverse': 'error',
    'array-func/prefer-flat-map': 'error',
    'array-func/prefer-flat': 'error',

    /**
     * eslint-plugin-comments
     *
     * @see https://github.com/mysticatea/eslint-plugin-eslint-comments
     */
    // Best Practices
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    // Stylistic Issues
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': 'off',

    /**
     * eslint-plugin-import
     *
     * @see https://github.com/benmosher/eslint-plugin-import
     */
    // Static Analysis
    'import/no-unresolved': 'off', // use `node/no-missing-*`
    'import/named': ES_MODULES,
    'import/default': ES_MODULES,
    'import/namespace': ES_MODULES,
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': ['error', { commonjs: true }],
    'import/no-dynamic-require': 'off',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'off', // computationally expensive
    'import/no-useless-path-segments': [
      'error',
      { noUselessIndex: true, commonjs: true },
    ],
    'import/no-relative-parent-imports': 'off', // breaks the shared "lib" pattern
    'import/no-relative-packages': 'error',

    // Helpful Warnings
    'import/export': 'error', // only works for es modules
    'import/no-named-as-default': 'error', // only works for es modules
    'import/no-named-as-default-member': 'error', // only works for es modules
    'import/no-deprecated': 'warn', // only works for es modules
    'import/no-extraneous-dependencies': [
      'error',
      {
        // false = not allowed
        devDependencies: ['test/**/*'],
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error', // only works for es modules
    'import/no-unused-modules': ES_MODULES,

    // Module Systems
    'import/unambiguous': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-import-module-exports': 'error',

    // Style
    'import/first': 'error', // only works for es modules
    'import/exports-last': ES_MODULES,
    'import/no-duplicates': 'off', // use eslint's no-duplicate-imports
    'import/no-namespace': ES_MODULES,
    'import/extensions': 'off', // use  node/file-extension-in-import`
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        'newlines-between': 'always-and-inside-groups',
        'alphabetize': {
          // As of 2.19.1 this option leads to weird behavior when enabled with
          // `newlines-between`
          order: 'ignore',
        },
        'warnOnUnassignedImports': true,
      },
    ],
    'import/newline-after-import': 'off', // use eslint's padding-line-between-statements
    'import/prefer-default-export': ES_MODULES,
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    'import/no-default-export': ES_MODULES,
    'import/no-named-export': ES_MODULES,
    'import/no-anonymous-default-export': ES_MODULES,
    'import/group-exports': 'error',
    'import/dynamic-import-chunkname': 'off',

    /**
     * eslint-plugin-jsdoc
     *
     * @see https://github.com/gajus/eslint-plugin-jsdoc
     */
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-examples': 'off', // too strict
    'jsdoc/check-indentation': 'off', // too strict, messes with lists
    'jsdoc/check-line-alignment': 'off',
    'jsdoc/check-param-names': [
      'error',
      {
        checkDestructured: true,
        checkRestProperty: true,
        allowExtraTrailingParamDocs: false,
        useDefaultObjectProperties: false,
        disableExtraPropertyReporting: true,
      },
    ],
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': [
      'error',
      { noDefaults: false, unifyParentAndChildTypeChecks: true },
    ],
    'jsdoc/check-values': 'off',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': 'off',
    'jsdoc/match-name': 'off',
    'jsdoc/multiline-blocks': [
      'error',
      {
        noZeroLineText: true, // default
        noFinalLineText: true, // default

        noSingleLineBlocks: true,
        singleLineTags: ['lends', 'type'], // default

        noMultilineBlocks: false, // default
        // minimumLengthForMultiline,
        multilineTags: ['*'], // default
        allowMultipleTags: true, // default
      },
    ],
    'jsdoc/newline-after-description': ['error', 'always'],
    'jsdoc/no-bad-blocks': ['error', { preventAllMultiAsteriskBlocks: true }],
    'jsdoc/no-defaults': 'off',
    'jsdoc/no-missing-syntax': 'off',
    'jsdoc/no-multi-asterisks': [
      'error',
      {
        allowWhitespace: true,
        preventAtMiddleLines: true, // default
        preventAtEnd: true, // default
      },
    ],
    'jsdoc/no-restricted-syntax': 'off',
    'jsdoc/no-types': 'off', // only needed if using TS
    'jsdoc/no-undefined-types': 'off', // weird to enforce without formal TS support
    'jsdoc/require-asterisk-prefix': [
      'error',
      'always',
      { tags: { any: ['*description'] } },
    ],
    'jsdoc/require-description-complete-sentence': 'off', // too strict
    'jsdoc/require-description': 'off', // too strict
    'jsdoc/require-example': 'off', // too strict
    'jsdoc/require-file-overview': 'off', // not used
    'jsdoc/require-hyphen-before-param-description': [
      'error',
      'always',
      { tags: { property: 'always' } },
    ],
    'jsdoc/require-jsdoc': 'off', // too strict
    'jsdoc/require-param-description': 'off', // prevent things like @param {number} size - the size
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-param': 'off',
    'jsdoc/require-property-description': 'off', // same reason as param description
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-property': 'error',
    'jsdoc/require-returns-check': [
      'error',
      { exemptGenerators: false, exemptAsync: false },
    ],
    'jsdoc/require-returns-description': 'off', // not needed when function is clear enough
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-returns': [
      'error',
      {
        checkGetters: true,
        exemptedBy: ['type', 'inheritdoc'],
        forceRequireReturn: false,
        forceReturnsWithAsync: false,
      },
    ],
    'jsdoc/require-yields': [
      'error',
      { withGeneratorTag: true, next: true, forceRequireNext: false },
    ],
    'jsdoc/require-yields-check': [
      'error',
      { checkGeneratorsOnly: true, next: true },
    ],
    'jsdoc/require-throws': 'off',
    'jsdoc/sort-tags': ['error', { alphabetizeExtras: true }],
    'jsdoc/tag-lines': 'off',
    'jsdoc/valid-types': ['error', { allowEmptyNamepaths: true }],

    /**
     * eslint-plugin-no-use-extend-native
     *
     * @see https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
     */
    'no-use-extend-native/no-use-extend-native': 'error',

    /**
     * eslint-plugin-n
     *
     * @see https://github.com/weiran-zsd/eslint-plugin-node
     */
    // Possible Errors
    'n/handle-callback-err': 'error',
    'n/no-callback-literal': 'error',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'off', // use `import/no-extraneous-dependencies`
    'n/no-extraneous-require': 'off', // use `import/no-extraneous-dependencies`
    'n/no-missing-import': 'error',
    'n/no-missing-require': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-exit': 'off', // use `unicorn/no-process-exit`
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'error',
    'n/no-unpublished-require': 'error',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'error',
    'n/no-unsupported-features/node-builtins': 'error',
    'n/process-exit-as-throw': 'error',
    // TODO [2022-07-31]: enable once the following issue is resolved:
    // https://github.com/mysticatea/eslint-plugin-node/issues/96
    'n/shebang': 'off',

    // Best Practices
    'n/no-deprecated-api': 'error',

    // Stylistic Issues
    'n/callback-return': 'error',
    'n/exports-style': ['error', 'module.exports'],
    'n/file-extension-in-import': ['error', 'always', { '.js': 'never' }],
    'n/global-require': 'error',
    'n/no-mixed-requires': 'error',
    'n/no-process-env': 'error',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': ['error', { allowAtRootLevel: true }],
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url-search-params': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',

    /**
     * eslint-plugin-sonarjs
     *
     * @see https://github.com/SonarSource/eslint-plugin-sonarjs
     */
    // Bug Detection
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-empty-collection': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-identical-conditions': 'off', // use `no-dupe-else-if`
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-ignored-return': 'error',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-use-of-empty-return-value': 'error',
    'sonarjs/non-existent-operator': 'error',

    // Code Smell Detection
    'sonarjs/cognitive-complexity': ['error', 15],
    // too opinionated, prevents easy documentation of expected cases
    'sonarjs/elseif-without-else': 'off',
    'sonarjs/max-switch-cases': ['error', 15],
    'sonarjs/no-collapsible-if': 'off', // too opinionated
    'sonarjs/no-collection-size-mischeck': 'error',
    'sonarjs/no-duplicate-string': ['error', 4],
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-gratuitous-expressions': 'error',
    'sonarjs/no-identical-functions': ['error', 3],
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-nested-switch': 'error',
    'sonarjs/no-nested-template-literals': 'error',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-redundant-jump': 'error',
    'sonarjs/no-same-line-conditional': 'off', // prettier
    'sonarjs/no-small-switch': 'error',
    'sonarjs/no-unused-collection': 'error',
    'sonarjs/no-useless-catch': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'error',

    /**
     * eslint-plugin-prettier
     *
     * @see https://github.com/prettier/eslint-plugin-prettier
     */
    'prettier/prettier': 'error',

    /**
     * eslint-plugin-promise
     *
     * @see https://github.com/xjamundx/eslint-plugin-promise
     */
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    // avoid using promises in functions where the first arg is named `err` or `error`
    'promise/no-promise-in-callback': 'error',
    // avoid calling callback functions (next, done, cb, etc.) inside promises
    'promise/no-callback-in-promise': 'error',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error', // not sure

    /**
     * eslint-plugin-unicorn
     *
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn
     */
    'unicorn/better-regex': ['error', { sortCharacterClasses: true }],
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'off', // too opinionated
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': PRETTIER,
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false },
    ],
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
    'unicorn/filename-case': 'error',
    'unicorn/import-style': ES_MODULES,
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    // TODO [2022-07-31]: enable once the following issue is resolved:
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/787
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': BROWSER,
    'unicorn/no-empty-file': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': BROWSER,
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': PRETTIER,
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'off', // use `node/no-deprecated-api`
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': ['error', { checkArguments: true }],
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': PRETTIER,
    'unicorn/numeric-separators-style': [
      'error',
      { onlyIfContainsSeparator: true },
    ],
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': ['error', { checkAllIndexAccess: false }],
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-event-target': 'off', // we currently only target Node.js
    'unicorn/prefer-export-from': ES_MODULES,
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-module': ES_MODULES,
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'off', // Array.from is more clear than spread
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': ['error', { minimumCases: 3 }],
    'unicorn/prefer-ternary': 'off', // too opinionated
    'unicorn/prefer-top-level-await': ES_MODULES, // only works in ESM
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/relative-url-style': ['error', 'never'],
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': BROWSER,
    'unicorn/string-content': 'off',
    'unicorn/template-indent': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error',
  },
};
