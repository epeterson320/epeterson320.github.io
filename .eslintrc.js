module.exports = {
  extends: "airbnb",
  globals: {
    graphql: false, // false means it can't be overwritten
  },
  rules: {
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": [],
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/prop-types": "off", // I'll just use typescript if I need it
    // Lots of markdown and copyrighting, I'd rather not have to write
    // "&apos;" everywhere I want a "'".
    "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }]
  }
};
