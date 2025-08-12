import React from 'react';
import styles from './Hero.module.css';

// PUBLIC_INTERFACE
export default function Hero() {
  /** Hero section featuring main headline and search bar. */
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Don’t miss out!
          <br />
          Explore the vibrant events happening locally and globally.
        </h1>

        <div className={styles.searchbar} role="search" aria-label="Search events">
          <div className={styles.searchField} aria-label="Search input">
            <span className="icon-search" style={{ color: 'var(--color-dark-text)' }} />
            <input type="text" placeholder="Search Events, Categories, Location,..." aria-label="Search" />
          </div>
          <div className={styles.searchLoc} aria-label="Location">
            <span className="icon-location" style={{ color: 'var(--color-grey-600)' }} />
            <span className={styles.locText}>Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
