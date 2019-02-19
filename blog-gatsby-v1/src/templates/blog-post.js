import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';

import Main from '../components/Main';
import Headline from '../components/Headline';
import { rhythm } from '../utils/typography';

export default ({ data }) => {
  const { post, next, previous } = data;
  const { html, frontmatter, fields } = post;
  const { date, datetime } = fields;
  return (
    <Main>
      <Headline>{frontmatter.title}</Headline>
      <g.Div
        color="rgba(0,0,0,0.54)"
        textAlign="center"
        marginBottom={rhythm(3)}
      >
        <time dateTime={datetime}>{date}</time>
      </g.Div>
      {/* eslint-disable react/no-danger */}
      {/* it's recommended in gatsbyjs.org/docs/adding-markdown-pages */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/* eslint-enable react/no-danger */}
      {previous ? (
        <PrevNextLink to={previous.fields.slug}>
          Previous: {previous.frontmatter.title}
        </PrevNextLink>
      ) : null}
      {next ? (
        <PrevNextLink to={next.fields.slug}>
          Next: {next.frontmatter.title}
        </PrevNextLink>
      ) : null}
    </Main>
  );
};

const PrevNextLink = g(Link)({
  display: 'inline-block',
  textDecoration: 'none',
  width: '15em',
  margin: rhythm(0.5),
});

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
