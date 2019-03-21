import React from 'react';
import { Link } from 'gatsby';

export default function BlogExcerpt({ slug, title, date, previewText }) {
  return (
    <div>
      <h3
        style={{
          display: 'inline',
          fontWeight: 'bold',
          fontSize: 'var(--fs-1)',
          marginBottom: '1.5rem',
        }}
      >
        <Link to={slug} style={{ display: 'block', textDecoration: 'none' }}>
          {title}
        </Link>
      </h3>
      <span style={{ display: 'inline-block', color: 'dimgray' }}>
        {' '}
        —{' '}
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </span>
      <p style={{ color: 'black', margin: '0.75rem 0 1.5rem' }}>
        {previewText}
      </p>
    </div>
  );
}
