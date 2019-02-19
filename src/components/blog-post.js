import React from 'react';
import Link from 'gatsby-link';

const BlogPostTemplate = ({ data }) => {
  const { post, next, previous } = data;
  const { html, frontmatter, fields = {}} = post;
  const { date, datetime } = fields;

  return (
    <main>
      <h1>{frontmatter.title}</h1>
      <div>
        <time dateTime={datetime}>{date}</time>
      </div>
      {/* eslint-disable react/no-danger */}
      {/* it's recommended in gatsbyjs.org/docs/adding-markdown-pages */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/* eslint-enable react/no-danger */}
      {previous ? (
        <Link to={previous.fields.slug}>
          Previous: {previous.frontmatter.title}
        </Link>
      ) : null}
      {next ? (
        <Link to={next.fields.slug}>
          Next: {next.frontmatter.title}
        </Link>
      ) : null}
    </main>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostQuery($id: String!, $prevId: String, $nextId: String) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
        date: date(formatString: "MMMM DD, YYYY")
        datetime: date
      }
    }
    previous: markdownRemark(id: { eq: $prevId }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    next: markdownRemark(id: { eq: $nextId }) {
      frontmatter { title }
      fields { slug }
    }
  }
`;
