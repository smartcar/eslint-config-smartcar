'use strict';

module.exports = {
  ...require('@smartcar/prettier-config'),
  overrides: [
    {
      files: 'index.js',
      options: {
        quoteProps: 'consistent',
      },
    },
  ],
};
