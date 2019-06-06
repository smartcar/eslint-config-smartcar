'use strict';

const rules = require('./.eslintrc.json');

module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules,
};
