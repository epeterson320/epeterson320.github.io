import React from 'react';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader';
import Footer from './Footer';

const Page = ({ children, className = '' }) => (
  <div className="flex flex-col min-h-screen">
    <NavHeader />
    <main className={`pt-20 px-4 pb-6 flex-1 flex flex-col ${className}`}>
      {children}
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
