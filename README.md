# eslint-config-smartcar

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Smartcar](https://github.com/smartcar)

## Install

```
$ npm install --save-dev eslint-config-smartcar
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "smartcar"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "smartcar"
}
```

And [`smartcar/browser`](browser.js) if you're in the browser:

```json
{
	"extends": "smartcar/browser"
}
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO


## License

MIT © [Smartcar, Inc.](https://smartcar.com)
