import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../components/Page';
import SEO from '../components/SEO';
import Projects from '../projects';
import BlogExcerpt from '../components/BlogExcerpt';
import { PageTitleArea, Title, SubTitle, Or } from '../components/titles';

const IndexPage = ({ data }) => (
  <Page style={{ maxWidth: '40rem', margin: '0 auto' }}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageTitleArea>
      <Title>Software engineer in northern Virginia,</Title>
      <Or />
      <SubTitle>Blogger and 1x developer,</SubTitle>
      <Or />
      <SubTitle>Deft wielder of JavaScript and duct tape.</SubTitle>
    </PageTitleArea>
    <p style={{ marginBottom: '1rem' }}>
      <Img
        style={{ float: 'right', margin: '0.25rem' }}
        fixed={data.file.childImageSharp.fixed}
        alt="Portrait photo of Eric's face"
        Tag="span"
      />
      <em style={{ fontSize: 'var(--fs-1)' }}>I'm Eric, and </em>
      I'm a mobile and web app developer in Northern Virginia. I've worked for
      enterprises and small companies in the energy, publishing, and healthcare
      industries. I build highly interactive web applications, with a focus on
      data visualization and clean UI. I have over 25 years of experience with
      React.js, in dog years.
    </p>

    <section style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '0.75rem' }}>Projects</h2>
      <p>Some stuff I've built over the years.</p>
      <Projects />
    </section>

    <section>
      <h2 style={{ fontWeight: 'bold', marginBottom: '0.75rem' }}>
        Latest Blog Posts
      </h2>
      <p style={{ marginBottom: '1.25rem' }}>
        Career experts say you should know your niche, so I focus on modern app
        development. I know other things, like how to write performant SQL
        statements and implement custom OAuth 2.0 authorization flows, but I'll
        keep that to myself.
      </p>
      {data.allMarkdownRemark.edges.map(
        ({
          node: {
            frontmatter: { title },
            fields: { date, slug },
            excerpt,
          },
        }) => (
          <BlogExcerpt
            key={slug}
            slug={slug}
            title={title}
            date={date}
            previewText={excerpt}
          />
        ),
      )}
    </section>
  </Page>
);

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
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
          excerpt
        }
      }
    }
    file(relativePath: { eq: "ericp-sq.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
