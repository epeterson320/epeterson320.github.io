import React from 'react';

export default () => (
  <footer className="bg-grey-darkest text-white h-24 mt-16 flex flex-wrap items-end justify-end">
    <span className="flex-1" />
    <p className="block">
      This part is the website footer. Thanks for reading.
    </p>
    <span className="text-xs pr-1 flex-1 text-right">
      © {new Date().getFullYear()}, Built with&nbsp;
      <a className="text-orange-lighter" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </span>
  </footer>
);
