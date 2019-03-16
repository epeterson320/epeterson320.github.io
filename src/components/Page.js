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
        padding: '5rem 1rem 1.5rem',
        /* stylelint-disable property-no-unknown */
        [centered && 'alignItems']: 'center',
        /* stylelint-enable */
        maxWidth: '40rem',
        width: '100%',
        margin: '0 auto',
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
