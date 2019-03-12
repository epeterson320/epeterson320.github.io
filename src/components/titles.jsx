import React from 'react';

export function PageTitleArea({ children }) {
  return <div className="text-center pb-6">{children}</div>;
}

export function Title({ children }) {
  return <h1 className="font-medium text-center">{children}</h1>;
}

export function SubTitle({ children }) {
  return <h2 className="font-serif">{children}</h2>;
}

export function Or() {
  return <em className="text-grey-darker">Or,</em>;
}

export function PostTime({ datetime, date }) {
  return (
    <time dateTime={datetime} className="float-right text-grey-dark">
      {date}
    </time>
  );
}
