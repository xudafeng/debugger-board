'use strict';

module.exports = {
  'root': true,
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true
    }
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'prefer-const': 'warn',
    'no-console': 'off',
    'no-loop-func': 'warn',
    'new-cap': 'off',
    'no-param-reassign': 'warn',
    'func-names': 'off',
    'no-unused-expressions': 'error',
    'block-scoped-var': 'error',
    'react/prop-types': 'off',
    'no-control-regex': 'off'
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '16.2'
    }
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'mocha': true,
  },
};
