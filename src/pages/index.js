import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import Main from '../components/Main';
import Headline from '../components/Headline';

import { rhythm, scale } from "../utils/typography";

export default ({ data }) => (
  <Main>
    <Headline>Software engineer serving the D.C. Metro area,</Headline>
    <Or>or,</Or>
    <AltHeadline>Blogger and 1x developer,</AltHeadline>
    <Or>or,</Or>
    <AltHeadline>Heavy user of JavaScript and duct tape.</AltHeadline>

    <g.P marginTop={rhythm(1)}>
      <g.Em {...scale(0.5)}>I'm Eric, and </g.Em>
      I'm a mobile and web app developer in Northern Virginia. I've worked
      for enterprises and small companies in the energy, publishing, and
      healthcare industries. Most of my work has involved building highly
      interactive tools using the React.js library and Android platform. Career
      experts say you should know your niche, so I focus on modern
      app development. I know other things, like how to write performant SQL
      statements and implement custom OAuth 2.0 authorization flows, but I'll
      keep that to myself.
    </g.P>
    <g.Section marginTop={rhythm(3)}>
      <h2>Projects</h2>
      {data.allIndexYaml.edges.map(({ node }, index) => (
        <Project key={index} {...node} />
      ))}
    </g.Section>
    <g.Section marginTop={rhythm(3)}>
      <h2>Latest Blog Posts</h2>
      <p>
        I try to write succinctly. If you're looking for content that pretends
        it's longer than it is by using a large font size, I would suggest you
        check out Medium.
      </p>

      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <BlogLink {...node} key={index} />
      ))}
    </g.Section>
  </Main>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allIndexYaml {
      edges {
        node {
          name
          description
          link
        }
      }
    }
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
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;

const Project = ({ link, name, description }) => (
  <g.Section>
    <g.H3 margin={rhythm(0)} {...scale(0)}>
      <a href={link}>{name}</a>
    </g.H3>
    <p>{description}</p>
  </g.Section>
);

const Or = g.span({
  fontStyle: "italic",
  display: "block",
  textAlign: "center",
  color: "rgba(0,0,0,0.54)"
});

const AltHeadline = g.span({
  display: "block",
  textAlign: "center",
  ...scale(0.5)
});

const BlogLink = ({ frontmatter, fields, excerpt, slug }) => (
  <g.Section marginBottom={rhythm(2)}>
    <g.H3 display="inline"><Link to={fields.slug} rel="bookmark">{frontmatter.title}</Link></g.H3>
    <g.P display="inline" color="rgba(0,0,0,0.54)"> --- <time dateTime={fields.datetime}>{fields.date}</time></g.P>
    <g.P paddingTop={rhythm(0.5)}>
      {excerpt}
      <Link to={fields.slug} rel="bookmark">(Read more...)</Link>
    </g.P>
  </g.Section>
);
