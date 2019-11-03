# eslint-config-smartcar [![Build Status][ci-image]][ci-url] [![NPM package][npm-image]][npm-url]

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Smartcar](https://github.com/smartcar)

## Install

*This package is intended for internal use and may not follow Semver guidelines*

```
$ npm install --save-dev eslint eslint-config-smartcar
```

You may also be able to integrate ESLint into your text editor, a list of integrations
is available [here](http://eslint.org/docs/user-guide/integrations).

**Note:** If you install eslint globally, you have to install eslint-config-smartcar
globally as well (as per [eslint#3293](https://github.com/eslint/eslint/issues/3293)).
It is recommended to install locally and add scripts to package.json as detailed under usage below.

## Usage

Create a .eslintrc.js file in the root of your project containing the following:

```js
module.exports = {
  extends: 'smartcar',
};
```

Add a npm bin script for linting

```json
{
  "name": "my-awesome-project",
  "scripts": {
    "lint": "eslint ."
  },
}
```

To run the linter on your project simply run `npm run lint` and ESLint will report
back errors and warnings. You can also run `npm run lint -- --fix` to use ESLint's
automatic fix mode, this will fix most simple style and spacing errors.


### Frontend Linting

It is suggested to use [`miyagi`](https://github.com/smartcar/miyagi) for front
end projects as it exposes utilities for linting javascript, css and html. This
project is meant to just codify linting rules for javascript.

If you wish to use the browser rules directly with eslint you can choose to
extend [`smartcar/browser`](browser.js).

```js
module.exports = {
  extends: 'smartcar/browser',
};
```

## Ignoring

- Ignore at a project level:
```js
module.exports = {
  extends: 'smartcar/browser',
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
console.log("I'm an error :( ")
```

- Inline ignore:
```js
console.log("I'm free!"); // eslint-disable-line no-console
console.log("I'm an error :( ")
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO


## License

MIT © [Smartcar, Inc.](https://smartcar.com)

[npm-url]: https://www.npmjs.com/package/eslint-config-smartcar
[npm-image]: https://img.shields.io/npm/v/eslint-config-smartcar.svg?style=flat-square

[ci-url]: https://travis-ci.com/smartcar/eslint-config-smartcar
[ci-image]: https://img.shields.io/travis/com/smartcar/eslint-config-smartcar/master.svg?style=flat-square
