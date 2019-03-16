import React from 'react';

const Project = ({ title, link, children }) => (
  <section style={{ marginBottom: '1rem' }}>
    <h3 style={{ fontWeight: 'bold', fontSize: '1rem' }}>
      <a href={link}>{title}</a>
    </h3>
    <p>{children}</p>
  </section>
);

export const Codeck = () => (
  <Project title="Codeck" link="codeck">
    A tool to encode and decode a message in an ordered deck of cards.
  </Project>
);

export const Triangles = () => (
  <Project title="Triangle Calculator" link="triangle-calculator">
    A web app that solves and displays triangles based on partially known
    measurements.
  </Project>
);

export const ABAPLogger = () => (
  <Project
    title="ABAP Logger"
    link="https://github.com/epeterson320/ABAP-Logger"
  >
    This is an open-source library I published when I was working with the ABAP
    programming language years ago. It needed a better way to log messages for
    further review, so I wrote a library to expose a more fluent interface for
    logging. As of March 2018, it's the&nbsp;
    <a href="https://github.com/topics/abap?o=desc&s=stars">
      third most starred ABAP project on Github
    </a>
    .
  </Project>
);

export const OccamsFlashlight = () => (
  <Project
    title="Occam's Flashlight"
    link="https://play.google.com/store/apps/details?id=co.ericp.flashlight"
  >
    The simplest possible Android flashlight.
  </Project>
);

const Projects = () => (
  <>
    <Codeck />
    <Triangles />
    <ABAPLogger />
    <OccamsFlashlight />
  </>
);

export default Projects;
