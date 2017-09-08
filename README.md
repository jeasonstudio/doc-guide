# eslint-config-jeason-base

This package includes the shareable ESLint configuration used by [Jeason](https://github.com/jeasonstudio).

## Usage

If you want to use this ESLint configuration in a project, you can install it with following steps.

First, install this package, ESLint and the necessary plugins.

```sh
# first switch to npm or taobao npm resource
nrm use npm/cnpm
npm install --save-dev eslint-config-jeason-base babel-eslint eslint eslint-plugin-flowtype eslint-plugin-import

# if you use react or jsx
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react
```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```js
{
  "extends": "eslint-config-jeason-base"
}
```

That's it! You can override the settings from `eslint-config-jeason-base` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.
