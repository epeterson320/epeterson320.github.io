module.exports = {
  extends: 'airbnb',
  globals: {
    // graphql is a global, false means it can't be written to
    graphql: false, 
  },
  rules: {
    // Gatsby's <Link> component doesn't need an href for accessibility
    'jsx-a11y/anchor-is-valid': ['error', { components: [] }],
    // .jsx as an extension doesn't really matter, everything is React
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // I'll just use typescript if I need type checking
    'react/prop-types': 'off',
    // Lots of markdown and copyrighting, I'd rather not have to write
    // "&apos;" everywhere I want a "'".
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
  },
};
