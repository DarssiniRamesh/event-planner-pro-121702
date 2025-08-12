import React from 'react';
import Header from '../../components/Header/Header';

// PUBLIC_INTERFACE
export default function Contact() {
  /** Placeholder Contact page to demonstrate route-based navigation highlighting in Header. */
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="subtitle">Get in touch with us. (Placeholder content)</p>
        </div>
      </section>
    </div>
  );
}
