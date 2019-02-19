module.exports = {
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
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allMarkdownRemark } }) =>
        allMarkdownRemark.edges.map(edge =>
          Object.assign({}, edge.node.frontmatter, {
            description: edge.node.excerpt,
            url: site.siteMetadata.siteUrl + edge.node.fields.slug,
            guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
            custom_elements: [{ 'content:encoded': edge.node.html }],
          })),
      query: `
        {
          allMarkdownRemark(
            limit: 1000,
            sort: { order: DESC, fields: [fields___date] },
          ) {
            edges {
              node {
                excerpt
                html
                fields {
                  date
                  slug
                }
                frontmatter { title }
              }
            }
          }
        }
      `,
      output: '/rss.xml',
    },
  ],
};
