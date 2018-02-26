import React from "react";
import Link from "gatsby-link";

export default ({ data }) => (
  <main>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      Software engineer serving the D.C. Metro area,
      <span>or, </span>
      Blogger and 1x developer,
      <span>or, </span>
      Vocal advocate of JavaScript and duct tape
    </p>

    <p>
      <span>I'm Eric, and </span>
      I'm a mobile and web app developer in Northern Virginia. I've
      built highly interactive tools using the React.js library and
      Android platform. Career experts say you should know your niche,
      so I'll keep the focus on modern app development. I know other
      things, like how to write performant SQL statements and OAuth 2.0
      authorization flows, but I'll keep that to myself.
    </p>

    <section>
      <h2>Projects</h2>
      <section>
        <h3>Codeck</h3>
        <p>
          A tool to encode and decode a message in an ordered deck of cards.
        </p>
      </section>

      <section>
        <h3>Triangle Calculator</h3>
        <p>
          A web app that solves and displays triangles based on partially known
          measurements.
        </p>
      </section>

      <section>
        <h3>Occam's Flashlight</h3>
        <p>The simplest possible Android flashlight.</p>
      </section>
    </section>

    <section>
      <h2>Latest Blog Posts</h2>
      <p>
        I write as succinctly as I can, and I don't try to make my
        posts appear longer by using a large font-size.
      </p>

      {data.allFile.edges.map(({ node }, index) => (
        <section key={index}>
          <h3>{node.name}</h3>
          <p>One day, as I was walking along...</p>
          <Link to="/posts/article">Continue reading...</Link>
        </section>
      ))}
    </section>
  </main>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          name
        }
      }
    }
  }
`
