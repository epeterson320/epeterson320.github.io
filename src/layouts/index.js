import React from "react"
import g from 'glamorous'
import Helmet from "react-helmet"

import Header from "../components/Header"
import Footer from '../components/Footer'

import './global.css';

export default ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: data.site.siteMetadata.description
        },
        {
          name: "keywords", content: data.site.siteMetadata.keywords
        }
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
