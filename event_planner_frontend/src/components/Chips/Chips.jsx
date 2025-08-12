import React from 'react';
import styles from './Chips.module.css';

// PUBLIC_INTERFACE
export default function Chips({ items = [], value, onChange }) {
  /**
   * Chip list with selectable filters.
   * items: [{label, value}]
   */
  return (
    <div className={styles.chips} role="tablist" aria-label="Filter by time/pricing">
      {items.map((item) => {
        const selected = value === item.value;
        return (
          <button
            key={item.value}
            type="button"
            className={styles.chip}
            role="tab"
            aria-selected={selected ? 'true' : 'false'}
            onClick={() => onChange && onChange(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
