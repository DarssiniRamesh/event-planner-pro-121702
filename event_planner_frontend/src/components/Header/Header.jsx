import React from 'react';
import styles from './Header.module.css';

// PUBLIC_INTERFACE
export default function Header() {
  /** Site header containing logo/brand, primary navigation, and action buttons. */
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <div className={styles.brand}>
          <div className={styles.brandTicket} aria-hidden="true" />
          <div className={styles.brandName}>Eventify</div>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <a href="#home" className={styles.active}>Home</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.actions}>
          <button className={`${styles.link} ${styles.linkLight}`} type="button">Create Event</button>
          <button className={`${styles.link} ${styles.linkLight}`} type="button">Login</button>
          <button className="btn btn--yellow btn--small" type="button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
