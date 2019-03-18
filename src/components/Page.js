import React from 'react';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader';
import Footer from './Footer';

import '../styles/global.css';
import 'prismjs/themes/prism.css';

const Page = ({ children, centered }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <NavHeader />
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        padding: '5rem 0.5rem 1.5rem',
        width: 'calc(100% - 1rem)',
        maxWidth: '40rem',
        margin: '0 auto',
        ...(centered && { alignItems: 'center' }),
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
