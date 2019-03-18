module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // These don't work well with jsx
    'declaration-block-trailing-semicolon': null,
    'declaration-colon-space-after': null,
    // Doesn't work well with prettier
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
  },
};
