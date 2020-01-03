# @smartcar/eslint-config [![Build Status][ci-image]][ci-url]

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Smartcar](https://github.com/smartcar)

## Installation

_This package is intended for internal use and may not follow Semver guidelines_

1. Authenticate with GitHub package registry by following [these](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages) steps.

2. `npm install --save-dev eslint @smartcar/eslint-config`

3. :tada:

You may also be able to integrate ESLint into your text editor, a list of integrations is available [here](http://eslint.org/docs/user-guide/integrations).

## Configuration

Create a `.eslintrc.js` file in the root of your project containing the following:

```js
'use strict';

module.exports = {
  extends: [
    // required
    '@smartcar/eslint-config',

    // optional
    '@smartcar/eslint-config/mocha', // or '@smartcar/eslint-config/ava',
    '@smartcar/eslint-config/lodash',
  ],
};
```

Enabling the `mocha`, `ava`, and `lodash` configurations enables rules that are specific to those frameworks.

Add a npm bin script for linting

```json
{
  "name": "my-awesome-project",
  "scripts": {
    "lint": "eslint . --cache"
  }
}
```

To run the linter on your project simply run `npm run lint` and ESLint will report
back errors and warnings. You can also run `npm run lint -- --fix` to use ESLint's
automatic fix mode, this will fix most simple style and spacing errors.

## Ignoring

- Ignore at a project level:

```js
'use strict';

module.exports = {
  extends: '@smartcar/eslint-config',
  rules: {
    camelcase: 'off',
  },
};
```

- Ignoring files or folders: Create a `.eslintignore` file at the root of your project

> `.eslintignore`

```
# node_modules/* and bower_components/* are ignored by default
coverage/*
.vscode/*
.idea/*
```

- Ignore at a file level:

```js
'use strict';

/* eslint-disable no-console */
console.log("What's linting?");
```

- Ignore block:

```js
/* eslint-disable console */
console.log('No one can stop me!');
console.log("I'm free from the linter!");
console.log('bawahaha');
/* eslint-enable console */

console.log('crap...');
```

- Ignore next line:

```js
// eslint-disable-next-line no-console
console.log("I'm free!");
console.log("I'm an error :( ");
```

- Inline ignore:

```js
console.log("I'm free!"); // eslint-disable-line no-console
console.log("I'm an error :( ");
```

## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO

## License

MIT © [Smartcar, Inc.](https://smartcar.com)

[ci-url]: https://travis-ci.com/smartcar/eslint-config-smartcar
[ci-image]: https://img.shields.io/travis/com/smartcar/eslint-config-smartcar/master.svg?style=flat-square
