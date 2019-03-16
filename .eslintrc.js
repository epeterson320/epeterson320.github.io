module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // enforce syntax & detect problems
    'plugin:react/recommended', // add react rules
    'plugin:prettier/recommended', // check code style
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: '*.js',
      excludedFiles: ['src/**', 'gatsby-browser.js'],
      env: {
        node: true,
        browser: false,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Don't require escaped apostrophes and quotes
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    // Types are for chumps
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
