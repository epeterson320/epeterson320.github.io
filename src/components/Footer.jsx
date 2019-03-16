import React from 'react';
import style from './Footer.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <p className={style.middle}>
      This part is the website footer. Thanks for reading.
    </p>
    <span className={style.side}>
      © {new Date().getFullYear()}, Built with&nbsp;
      <a style={{ color: 'navajowhite' }} href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </span>
  </footer>
);

export default Footer;
