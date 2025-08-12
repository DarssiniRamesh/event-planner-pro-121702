import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

// PUBLIC_INTERFACE
export default function Header() {
  /** Site header containing logo/brand, primary navigation (with active tab highlighting), and action buttons. */
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <div className={styles.brand}>
          <div className={styles.brandTicket} aria-hidden="true" />
          <Link to="/" className={styles.brandName}>Eventify</Link>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Events
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Contact
          </NavLink>
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
