/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const dirName = fileNode.relativeDirectory;
    const [year, month, day, ...titleWords] = dirName.split('-');
    const date = new Date(year, month - 1, day);
    const slugSegment = titleWords.join('-');
    const slug = createFilePath({ node, getNode, basePath: 'posts' });
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
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/components/blog-post.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          previous { id }
          node {
            id
            fields { slug }
          }
          next { id }
        }
      }
    }
  `);
  if (result.errors) {
    return Promise.reject(result.errors);
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        id: node.id,
        prevId: previous && previous.id,
        nextId: next && next.id,
      },
    });
  });
};
