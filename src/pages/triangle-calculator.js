import React from 'react';
import SEO from '../components/SEO';
import TriangleCalculator from '../triangle-calculator';

const TriangleCalculatorPage = () => (
  <div className="Page__container">
    <SEO title="Triangle Calculator" />
    <header>
      <h1 className="title">Triangle Calculator</h1>
    </header>
    <main id="root">
      <TriangleCalculator />
    </main>
    <footer>Copyright 2017 Eric Peterson</footer>
  </div>
);

export default TriangleCalculatorPage;
