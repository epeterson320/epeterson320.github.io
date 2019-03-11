import React from 'react';
import Link from 'gatsby-link';
import { GitHubIcon, RssIcon, EmailIcon, CodePenIcon } from './icons';

const NavHeader = () => (
  <header className="border-b border-grey-darker bg-grey-lighter flex justify-center">
    <nav className="max-w-xl flex px-2 w-full">
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

const linkCls = "no-underline text-black p-3 flex items-center";
const ListLink = ({ to, label, children, external = false }) => {
  const link = (external) 
    ? <a href={to} aria-label={label} className={linkCls}>{children}</a>
    : <Link to={to} aria-label={label} className={linkCls}>{children}</Link>;

  return <li className="inline">{link}</li>;
}
