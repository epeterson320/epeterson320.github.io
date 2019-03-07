import React from 'react';
import Link from 'gatsby-link';
import Layout from './layout';

const BlogPost = ({
  pageContext: {
    node: { html, frontmatter, fields },
    next,
    previous,
  },
}) => (
  <Layout>
    <div className="py-12">
      <h1 className="text-center">{frontmatter.title}</h1>
      <time dateTime={fields.datetime} className="float-right text-grey-dark">
        {fields.date}
      </time>
    </div>
    {/* eslint-disable react/no-danger */}
    {/* it's recommended in gatsbyjs.org/docs/adding-markdown-pages */}
    <div dangerouslySetInnerHTML={{ __html: html }} />
    {/* eslint-enable react/no-danger */}
    <div className="flex justify-between mt-8">
      {previous ? (
        <span className="inline-block">
          <strong className="block">Previous</strong>
          <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
        </span>
      ) : null}
      {next ? (
        <span className="inline-block">
          <strong className="block">Next</strong>
          <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </span>
      ) : null}
    </div>
  </Layout>
);

export default BlogPost;
