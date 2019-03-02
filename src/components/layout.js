import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Navbar';
import './style.css';
import 'prismjs/themes/prism.css';

const Layout = ({ children, className = '' }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={className}>{children}</main>
        <footer className="bg-grey-darkest text-white h-24 mt-16 flex items-end">
          <span className="flex-1" />
          <p className="text-center flex-3 mx-auto">
            This part is the website footer. Thanks for reading.
          </p>
          <span className="float-right text-xs flex-1 text-right pr-1">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a className="text-orange-lighter" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
          </span>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
