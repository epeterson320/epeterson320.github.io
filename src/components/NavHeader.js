import React from 'react';
import Link from 'gatsby-link';
import { GitHubIcon, RssIcon, EmailIcon, CodePenIcon, BarsIcon } from './icons';
import styles from './NavHeader.module.css';

const NavHeader = () => (
  <header className={styles.header}>
    <h2 className={styles.title}>
      <Link to="/">Eric Peterson</Link>
    </h2>
    <input id="nav-links-toggle" type="checkbox" className={styles.toggle} />
    <label htmlFor="nav-links-toggle" className={styles.toggleLabel}>
      <BarsIcon />
    </label>
    <nav className={styles.nav} role="navigation">
      <ListLink to="/posts">Blog</ListLink>
      <ListLink to="https://www.github.com/epeterson320" external>
        <GitHubIcon />
        &nbsp;Github
      </ListLink>
      <ListLink to="https://codepen.io/epeterson320/" external>
        <CodePenIcon />
        &nbsp;CodePen
      </ListLink>
      <ListLink to="/contact">
        <EmailIcon />
        &nbsp;Contact
      </ListLink>
      <ListLink to="/rss.xml" label="RSS" external>
        <RssIcon />
      </ListLink>
    </nav>
  </header>
);

export default NavHeader;

const ListLink = ({ to, label, children, external = false }) => {
  const link = external ? (
    <a href={to} aria-label={label} className={styles.link}>
      {children}
    </a>
  ) : (
    <Link to={to} aria-label={label} className={styles.link}>
      {children}
    </Link>
  );

  return link;
};
