module.exports = {
  siteMetadata: {
    title: 'Eric Peterson — I write software',
    description: 'The blog and portfolio of Eric Peterson, a software engineer in northern Virginia.',
    keywords: "software, engineering, Virginia, Washington, javascript",
    timezone: 'America/New_York'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`,
      }
    }
  ],
};
