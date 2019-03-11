/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const dirName = fileNode.relativeDirectory;
    const [year, month, day, ...titleWords] = dirName.split('-');
    const date = new Date(year, month - 1, day);
    const slugSegment = titleWords.join('-');
    const slug = path.posix.join('/posts', slugSegment);
    const previewText = node.frontmatter.previewText || '';

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'date',
      value: date,
    });

    createNodeField({
      node,
      name: 'previewText',
      value: previewText,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query BlogPostQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: [fields___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter { title }
            fields {
              slug
              date: date(formatString: "MMMM DD, YYYY")
              datetime: date
            }
          }
          previous {
            frontmatter { title }
            fields { slug }
          }
          next {
            frontmatter { title }
            fields { slug }
          }
        }
      }
    }
  `);
  if (result.errors) {
    return Promise.reject(result.errors);
  }

  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`${__dirname}/src/components/BlogPost.js`);

  const { edges } = result.data.allMarkdownRemark;

  edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: blogPostTemplate,
      context: edge,
    });
  });
};
