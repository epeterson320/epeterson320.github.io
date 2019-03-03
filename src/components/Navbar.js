import React from 'react';
import Link from 'gatsby-link';
import { GitHubIcon, RssIcon, EmailIcon, CodePenIcon } from './icons';

const Header = () => (
  <header className="border-b border-grey-darker bg-grey-lighter">
    <nav className="flex px-2">
      <h2 className="font-bold py-2">
        <Link
          to="/"
          className="no-underline whitespace-no-wrap hover:text-black"
        >
          Eric Peterson
        </Link>
      </h2>
      <ul className="flex-1 flex flex-wrap items-center justify-end">
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
