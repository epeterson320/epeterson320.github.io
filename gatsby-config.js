module.exports = {
  siteMetadata: {
    title: `Eric Peterson — I write software`,
    description:
      'The blog and portfolio of Eric Peterson, a ' +
      'software engineer in northern Virginia.',
    author: `Eric Peterson`,
    keywords: 'software, engineering, Virginia, Washington, javascript',
    siteUrl: 'https://www.ericp.co',
  },
  plugins: [
    // Support server-rendering data added with
    // React Helmet.
    `gatsby-plugin-react-helmet`,
    // gatsby-source-filesystem makes files in
    // the specified directories available in
    // graphQL at build time.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    // _Sharp_ is an image processing library.
    // The plugin creates graphQL nodes at build time,
    // the transformer does...other stuff, idk.
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Remark parses markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Resolve markdown images and generate
          // responsive versions
          'gatsby-remark-images',
          // Prismjs adds code syntax highlighting
          // at build time.
          'gatsby-remark-prismjs',
          // Smartypants adds typographically correct
          // punctuation (curly quotes, em dashes, ellipses)
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              // convert two hyphens to en dash
              // convert three hyphens to em dash
              dashes: 'oldschool',
            },
          },
        ],
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // Add an RSS feed.
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }),
              ),
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                    }
                  }
                }
              }
            }`,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    // Adds a sitemap.xml to the build.
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
