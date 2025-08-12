import React from 'react';
import Header from '../../components/Header/Header';

// PUBLIC_INTERFACE
export default function About() {
  /** Placeholder About page to demonstrate route-based navigation highlighting in Header. */
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          <h2 className="section-title">About</h2>
          <p className="subtitle">Learn more about Eventify. (Placeholder content)</p>
        </div>
      </section>
    </div>
  );
}
