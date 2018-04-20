/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const dirName = fileNode.relativeDirectory;
    const [year, month, day, ...titleWords] = dirName.split('-');
    const date = new Date(year, month - 1, day);
    const slugSegment = titleWords.join('-');
    const slug = path.posix.join('/posts', slugSegment);

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
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const queryResult = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [fields___date], order: ASC }) {
        edges {
          previous {
            id
          }
          node {
            id
            fields { slug }
          }
          next {
            id
          }
        }
      }
    }
  `);
  const { createPage } = boundActionCreators;
  const { edges } = queryResult.data.allMarkdownRemark;

  edges.forEach(({ node, previous, next }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        // Data passed to context is available in page queries as GraphQL data
        id: node.id,
        prevId: previous && previous.id,
        nextId: next && next.id,
      },
    });
  });
};
