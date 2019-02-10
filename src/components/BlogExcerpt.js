import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

export default ({
  slug,
  title,
  previewText,
  dateTime,
  date,
}) => (
  <g.Section marginBottom={rhythm(2)}>
    <g.H3 display="inline">
      <Link to={slug} rel="bookmark">
        {title}
      </Link>
    </g.H3>
    <g.P display="inline" color="rgba(0,0,0,0.54)">
      {' — '}
      <time dateTime={dateTime}>{date}</time>
    </g.P>
    <g.P paddingTop={rhythm(0.5)}>
      {previewText}
      {' '}
      <Link to={slug} rel="bookmark">
        (Read more...)
      </Link>
    </g.P>
  </g.Section>
);
