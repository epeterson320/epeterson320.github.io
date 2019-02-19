import React from 'react';
import Helmet from 'react-helmet';
import g from 'glamorous';
import 'prismjs/themes/prism-solarizedlight.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './global.css';

const Page = ({ children, data }) => (
  <RootDiv>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
        {
          name: 'keywords',
          content: data.site.siteMetadata.keywords,
        },
      ]}
      htmlAttributes={{ lang: 'en' }}
    />
    <Header />
    {children()}
    <Footer />
  </RootDiv>
);

export default Page;

const RootDiv = g.div({
  minHeight: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
});

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
`;
