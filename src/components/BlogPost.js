import React from 'react';
import Link from 'gatsby-link';
import Page from './Page';
import { PageTitleArea, Title, PostTime } from './titles.jsx';

const BlogPost = ({
  pageContext: {
    node: { html, frontmatter, fields },
    next,
    previous,
  },
}) => (
  <Page>
    <PageTitleArea>
      <Title>{frontmatter.title}</Title>
      <PostTime date={fields.date} dateTime={fields.datetime} />
    </PageTitleArea>
    {/* eslint-disable react/no-danger */}
    {/* it's recommended in gatsbyjs.org/docs/adding-markdown-pages */}
    <div
      style={{ width: '100%', maxWidth: '40rem' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
    {/* eslint-enable react/no-danger */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem',
      }}
    >
      {previous ? (
        <span style={{ display: 'inline-block', margin: '1rem' }}>
          <strong style={{ display: 'block' }}>Previous</strong>
          <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
        </span>
      ) : null}
      {next ? (
        <span style={{ display: 'inline-block', margin: '1rem' }}>
          <strong style={{ display: 'block' }}>Next</strong>
          <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </span>
      ) : null}
    </div>
  </Page>
);

export default BlogPost;
