import React from 'react';
import Link from 'gatsby-link';
import { GitHubIcon, RssIcon, EmailIcon, CodePenIcon } from './icons';

const Header = () => (
  <header className="border-b border-grey-darker">
    <nav className="h-12 flex items-center px-2">
      <h2 className="font-bold flex-1">
        <Link to="/" className="no-underline hover:text-black">
          Eric Peterson
        </Link>
      </h2>
      <ul className="flex items-center">
        <ListLink to="/posts">Blog</ListLink>
        <ListLink to="https://www.github.com/epeterson320">
          <GitHubIcon />
          &nbsp;Github
        </ListLink>
        <ListLink to="https://codepen.io/epeterson320/">
          <CodePenIcon />
          &nbsp;CodePen
        </ListLink>
        <ListLink to="/contact">
          <EmailIcon />
          &nbsp;Contact
        </ListLink>
        <ListLink to="/rss.xml" label="RSS">
          <RssIcon />
        </ListLink>
      </ul>
    </nav>
  </header>
);

export default Header;

const ListLink = ({ to, label, children }) => (
  <li className="inline">
    <Link
      to={to}
      aria-label={label}
      className="no-underline text-black p-3 flex items-center"
    >
      {children}
    </Link>
  </li>
);
