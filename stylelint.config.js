module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // These don't work well with jsx
    'declaration-block-trailing-semicolon': null,
    'declaration-colon-space-after': null,
  },
};
