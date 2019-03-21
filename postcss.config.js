module.exports = () => ({
  plugins: [
    require('postcss-responsive-type')(),
    require('postcss-normalize')(),
  ],
});
