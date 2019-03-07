import React from 'react';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader';
import Footer from './Footer';

import './style.css';
import 'prismjs/themes/prism.css';

const Layout = ({ children, className = '' }) => (
  <>
    <NavHeader />
    <main className={`flex flex-col ${className}`}>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
