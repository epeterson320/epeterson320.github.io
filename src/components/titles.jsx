import React from 'react';

export function PageTitleArea({ children }) {
  return (
    <div style={{ textAlign: 'center', paddingBottom: '1.5rem' }}>
      {children}
    </div>
  );
}

export function Title({ children }) {
  return <h1 style={{ fontWeight: 500, textAlign: 'center' }}>{children}</h1>;
}

export function SubTitle({ children }) {
  return <h2 style={{ fontFamily: 'var(--serif-stack)' }}>{children}</h2>;
}

export function Or() {
  return <em style={{ color: 'dimgray' }}>Or,</em>;
}

export function PostTime({ datetime, date }) {
  return (
    <time dateTime={datetime} style={{ float: 'right', color: 'dimgray' }}>
      {date}
    </time>
  );
}
