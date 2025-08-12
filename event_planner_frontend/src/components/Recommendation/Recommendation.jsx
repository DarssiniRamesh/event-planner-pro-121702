import React from 'react';
import styles from './Recommendation.module.css';

// PUBLIC_INTERFACE
export default function Recommendation() {
  /** Dark banner encouraging personalized recommendations with CTA button. */
  return (
    <div className={styles.reco}>
      <h3 className={styles.title}>Events specially curated for you!</h3>
      <p className={styles.text}>
        Get event suggestions tailored to your interests! Don't let your favorite events slip away.
      </p>
      <button className="btn btn--yellow" type="button">
        Get Started
        <span className="icon-plus" style={{ color: 'var(--color-navy)', width: 26, height: 26 }}></span>
      </button>
    </div>
  );
}
