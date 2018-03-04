const rssConfig = require('./gatsby-plugin-feed');

module.exports = {
  siteMetadata: {
    title: 'Eric Peterson — I write software',
    description:
      'The blog and portfolio of Eric Peterson, a ' +
      'software engineer in northern Virginia.',
    keywords: 'software, engineering, Virginia, Washington, javascript',
    siteUrl: 'https://www.ericp.co',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: { siteUrl: 'https://www.ericp.co' },
    },
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/projects/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: { dashes: 'oldschool' },
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 590 },
          },
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-feed',
      options: rssConfig,
    },
    'gatsby-plugin-sitemap',
  ],
};
