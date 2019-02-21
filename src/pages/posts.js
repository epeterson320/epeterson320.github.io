import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const AllPosts = (props) => (
  <main>
    <h1>All Posts</h1>
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.fields.slug}>
        <h1>{node.frontmatter.title}</h1>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </main>
);

const AllPostsPage = () => (
  <StaticQuery
    query={query}
    render={(data) => <AllPosts data={data} />}
  />
);

export default AllPostsPage;

const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
            date: date(formatString: "MMMM DD, YYYY")
            datetime: date
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;
