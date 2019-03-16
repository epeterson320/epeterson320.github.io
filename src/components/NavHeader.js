import React from 'react';
import Link from 'gatsby-link';
import { GitHubIcon, RssIcon, EmailIcon, CodePenIcon } from './icons';

const NavHeader = () => (
  <header
    style={{
      borderBottom: '1px solid silver',
      backgroundColor: 'aliceblue',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <nav
      style={{
        maxWidth: '60rem',
        display: 'flex',
        width: '100%',
        padding: '0 0.5rem',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          color: 'black',
          padding: '0.25rem 0',
          alignSelf: 'center',
        }}
      >
        <h2 style={{ fontWeight: 'bold' }}>Eric Peterson</h2>
      </Link>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flex: '1',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
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
      </ul>
    </nav>
  </header>
);

export default NavHeader;

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  padding: '0.75rem',
  display: 'flex',
  alignItems: 'center',
};

const ListLink = ({ to, label, children, external = false }) => {
  const link = external ? (
    <a href={to} aria-label={label} style={linkStyle}>
      {children}
    </a>
  ) : (
    <Link to={to} aria-label={label} style={linkStyle}>
      {children}
    </Link>
  );

  return <li style={{ display: 'inline' }}>{link}</li>;
};
