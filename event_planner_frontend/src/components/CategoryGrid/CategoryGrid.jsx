import React from 'react';
import styles from './CategoryGrid.module.css';

// PUBLIC_INTERFACE
export default function CategoryGrid({ items = [] }) {
  /** Displays the "Explore Categories" circular list grid with styled category images. */
  
  const getCategoryStyle = (label) => {
    // Match gradient and color based on category type
    switch(label) {
      case 'Entertainment':
        return styles.entertainment;
      case 'Educational & Business':
        return styles.educational;
      case 'Cultural & Arts':
        return styles.cultural;
      case 'Sports & Fitness':
        return styles.sports;
      case 'Technology & Innovation':
        return styles.technology;
      case 'Travel & Adventure':
        return styles.travel;
      default:
        return '';
    }
  };

  return (
    <div className={styles.grid}>
      {items.map((label) => (
        <div key={label} className={styles.cat}>
          <div 
            className={`${styles.circle} ${getCategoryStyle(label)}`} 
            aria-hidden="true"
          >
            <div className={styles.overlay} />
          </div>
          <div className={styles.label}>{label}</div>
        </div>
      ))}
    </div>
  );
}
