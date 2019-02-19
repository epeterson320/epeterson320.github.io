import React from 'react';
import g from 'glamorous';

import Main from '../components/Main';
import Headline from '../components/Headline';
import BlogExcerpt from '../components/BlogExcerpt';
import { rhythm } from '../utils/typography';

export default ({ data }) => (
  <Main>
    <Headline>All Posts</Headline>
    <g.Div marginTop={rhythm(2)} />
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <BlogExcerpt key={node.slug} {...node} />)}
  </Main>
);

export const query = graphql`
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
