import React from 'react';
import styles from './CategoryGrid.module.css';

// PUBLIC_INTERFACE
export default function CategoryGrid({ items = [] }) {
  /** Displays the "Explore Categories" circular list grid. */
  return (
    <div className={styles.grid}>
      {items.map((label) => (
        <div key={label} className={styles.cat}>
          <div className={styles.circle} aria-hidden="true" />
          <div className={styles.label}>{label}</div>
        </div>
      ))}
    </div>
  );
}
