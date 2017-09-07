'use strict'

const restrictedGlobals = require('./restricted-globals');

module.exports = {
  // babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint
  // https://www.npmjs.com/package/babel-eslint
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint-config-airbnb',
  ],
  plugins: ['import', 'flowtype', 'jsx-a11y', 'react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': 'off',
    'consistent-return': 'warn',
    'no-param-reassign': 'off',
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-shadow': 'off',
    'max-len': 'warn',
    'import/first': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'semi': ['warn', 'never'],
    'space-before-function-paren': 'off',
    'strict': ['warn', 'safe'],
    'global-require': 'warn',
    'prefer-template': 'warn',
    'quotes': [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'no-else-return': 'warn',
    'no-console': 'warn',
    'no-use-before-define': 'warn',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    // disable jsx-a11y rules, no need for us
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
    'jsx-a11y/aria-props': 'off',
    'jsx-a11y/aria-proptypes': 'off',
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/aria-unsupported-elements': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/no-access-key': 'off',
    'jsx-a11y/no-distracting-elements': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-has-required-aria-props': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'jsx-a11y/scope': 'off',
  },
}
