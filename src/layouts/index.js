import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "../components/Header"

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
    <footer>This part is the website footer. Thanks for reading.</footer>
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
