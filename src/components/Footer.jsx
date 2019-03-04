import React from 'react';

export default () => (
  <footer className="bg-grey-darkest text-white h-24 mt-16 flex flex-col justify-end items-end md:flex-row md:justify-center">
    <p className="self-center md:self-end">
      This part is the website footer. Thanks for reading.
    </p>
    <span className="text-xs md:absolute pin-r">
      © {new Date().getFullYear()}, Built with&nbsp;
      <a className="text-orange-lighter" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </span>
  </footer>
);
