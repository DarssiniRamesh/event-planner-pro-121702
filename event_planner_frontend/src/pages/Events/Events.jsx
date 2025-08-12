import React from 'react';
import Header from '../../components/Header/Header';

// PUBLIC_INTERFACE
export default function Events() {
  /** Placeholder Events page to demonstrate route-based navigation highlighting in Header. */
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          <h2 className="section-title">Events</h2>
          <p className="subtitle">Explore events around you. (Placeholder content)</p>
        </div>
      </section>
    </div>
  );
}
