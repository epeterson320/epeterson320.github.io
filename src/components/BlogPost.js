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
  <Page className="items-center">
    <PageTitleArea>
      <Title>{frontmatter.title}</Title>
      <PostTime date={fields.date} dateTime={fields.datetime} />
    </PageTitleArea>
    {/* eslint-disable react/no-danger */}
    {/* it's recommended in gatsbyjs.org/docs/adding-markdown-pages */}
    <div
      className="container max-w-md"
      dangerouslySetInnerHTML={{ __html: html }}
    />
    {/* eslint-enable react/no-danger */}
    <div className="flex justify-between mt-8">
      {previous ? (
        <span className="inline-block m-4">
          <strong className="block">Previous</strong>
          <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
        </span>
      ) : null}
      {next ? (
        <span className="inline-block m-4">
          <strong className="block">Next</strong>
          <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </span>
      ) : null}
    </div>
  </Page>
);

export default BlogPost;
