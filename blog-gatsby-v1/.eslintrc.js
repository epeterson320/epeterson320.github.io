module.exports = {
  extends: 'airbnb',
  globals: {
    // graphql is a global, false means it can't be written to
    graphql: false, 
  },
  rules: {
    // I want to see code side-by-side
    'max-len': ['error', { code: 80 }],
    // Allows for more rhetorical code
    'no-use-before-define': ['error', { functions: false, variables: false }],
    // Gatsby's <Link> component doesn't need an href for accessibility
    'jsx-a11y/anchor-is-valid': ['error', { components: [] }],
    // I'll just use typescript if I need type checking
    'react/prop-types': 'off',
    // Lots of markdown and copyrighting, I'd rather not have to write
    // "&apos;" everywhere I want a "'".
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
  },
};
