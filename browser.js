'use strict';

var path = require('path');

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  env: {
    node: false,
    browser: true,
  },
  globals: {
    "Polymer": false,
    "page": false,
  },
  plugins: [
    "eslint-plugin-script-tags"
  ],
};
