import React from 'react';
import g from 'glamorous';

import Main from '../components/Main';
import Headline from '../components/Headline';
import ContactForm from '../components/ContactForm';
import { rhythm } from '../utils/typography';


export default ({ data }) => {
  const { html, frontmatter, fields } = data.markdownRemark;
  return (
    <Main>
      <Headline>{frontmatter.title}</Headline>
      <g.Div
        color="rgba(0,0,0,0.54)"
        textAlign="center"
        marginBottom={rhythm(3)}
      >
        <time dateTime={fields.datetime}>{fields.date}</time>
      </g.Div>
      {/* eslint-disable react/no-danger */}
      {/* it's recommended in gatsbyjs.org/docs/adding-markdown-pages */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/* eslint-enable react/no-danger */}
      <ContactForm />
    </Main>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        date: date(formatString: "MMMM DD, YYYY")
        datetime: date
      }
    }
  }
`;
