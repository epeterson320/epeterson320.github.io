import React from 'react';
import { Link } from 'gatsby';

export default function BlogExcerpt({ slug, title, date, previewText }) {
  return (
    <Link to={slug} className="block group no-underline">
      <h3 className="inline font-bold text-xl text-black group-hover:text-orange-dark mb-6">
        {title}
      </h3>
      <span className="text-black inline-block">
        {' '}
        —{' '}
        <time className="text-grey-dark" dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </span>
      <p className="text-black mt-3 mb-6">{previewText}</p>
    </Link>
  );
}
