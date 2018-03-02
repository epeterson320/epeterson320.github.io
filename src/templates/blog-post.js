import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';

import Main from '../components/Main';
import Headline from '../components/Headline';
import ContactForm from '../components/ContactForm';
import { rhythm } from '../utils/typography';

export default ({ data }) => {
  const { html, frontmatter, fields } = data.markdownRemark;
  const { date, datetime, slug } = fields;
  const { edges } = data.allMarkdownRemark;
  const { next, previous } = edges.find(edge => edge.node.fields.slug === slug);
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
          Next: {previous.frontmatter.title}
        </PrevNextLink>
      ) : null}
      <ContactForm />
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
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
    allMarkdownRemark(sort: { fields: [fields___date], order: ASC }) {
      edges {
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`;
