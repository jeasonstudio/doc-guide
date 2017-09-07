# jeason-eslint-config

This package includes the shareable ESLint configuration used by [Jeason](https://github.com/jeasonstudio).

## Usage

If you want to use this ESLint configuration in a project, you can install it with following steps.

First, install this package, ESLint and the necessary plugins.

```sh
# first switch to npm or taobao npm resource
nrm use npm/cnpm
npm install --save-dev jeason-eslint-config babel-eslint eslint eslint-plugin-flowtype eslint-plugin-import

# if you use react or jsx
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react
```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```js
{
  "extends": "jeason-eslint-config"
}
```

That's it! You can override the settings from `jeason-eslint-config` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.
