import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from '../projects';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Portrait photo of Eric's face"
    />
    <h1>Software engineer in the D.C. Metro area,</h1>
    <span>or,</span>
    <h2>Blogger and 1x developer,</h2>
    <span>or,</span>
    <h2>Deft wielder of JavaScript and duct tape.</h2>
    {/*<img resolutions={data.file.childImageSharp.resolutions} />*/}
    <p>
      <em>I'm Eric, and </em>
      I'm a mobile and web app developer in Northern Virginia. I've worked for
      enterprises and small companies in the energy, publishing, and healthcare
      industries. I build highly interactive web applications, with a focus on
      data visualization and clean UI.
    </p>

    <section>
      <h2>Projects</h2>
      <Projects />
    </section>

    <section>
      <h2>Latest Blog Posts</h2>
      <p>
        Career experts say you should know your niche, so I focus on modern app
        development. I know other things, like how to write performant SQL
        statements and implement custom OAuth 2.0 authorization flows, but I'll
        keep that to myself.
      </p>
      {data.allMarkdownRemark.edges.map(({
        node: {
          frontmatter: { title },
          fields: { slug },
          excerpt,
        },
      }) => (
        <React.Fragment key={slug}>
          <h3><a href={slug}>{title}</a></h3>
          <div>{excerpt}</div>
        </React.Fragment>
      ))}
    </section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter { title }
          fields { slug }
          excerpt
        }
      }
    }
    file(relativePath: { eq: "ericp-sq.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
