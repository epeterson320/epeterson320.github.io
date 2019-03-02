import React from 'react';
import Link from 'gatsby-link';
import { GitHubIcon, RssIcon, EmailIcon, CodePenIcon } from './icons';

const Header = () => (
  <header className="border-b border-grey-darker">
    <nav className="h-12 flex items-center">
      <h2 className="">
        <Link to="/">Eric Peterson</Link>
      </h2>
      <ul className="">
        <ListLink href="/posts" label="Blog" />
        <ListLink href="https://www.github.com/epeterson320">
          GitHub <GitHubIcon />
        </ListLink>
        <ListLink href="https://codepen.io/epeterson320/">
          CodePen <CodePenIcon />
        </ListLink>
        <ListLink href="/contact">
          Contact <EmailIcon />
        </ListLink>
        <ListLink href="/rss.xml">
          RSS <RssIcon />
        </ListLink>
      </ul>
    </nav>
  </header>
);

export default Header;

const ListLink = ({ href, label, children }) => (
  <li className="inline m-2">
    <a href={href} aria-label={label}>
      {children}
    </a>
  </li>
);
