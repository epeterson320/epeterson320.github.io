import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Page from '../components/Page';
import BlogExcerpt from '../components/BlogExcerpt';
import { PageTitleArea, Title } from '../components/titles';

const AllPosts = (props) => (
  <Page className="max-w-md mx-auto">
    <PageTitleArea>
      <Title>All Posts</Title>
    </PageTitleArea>
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <BlogExcerpt
        title={node.frontmatter.title}
        slug={node.fields.slug}
        date={node.fields.date}
        previewText={node.excerpt}
        />
    ))}
  </Page>
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
            date
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;
