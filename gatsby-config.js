module.exports = {
  siteMetadata: {
    title: 'Eric Peterson — I write software',
    description: 'The blog and portfolio of Eric Peterson, a software engineer in northern Virginia.',
    keywords: "software, engineering, Virginia, Washington, javascript",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/projects/`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    'gatsby-transformer-yaml',
  ],
};
