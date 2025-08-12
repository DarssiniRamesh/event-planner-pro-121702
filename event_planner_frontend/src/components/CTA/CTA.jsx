import React from 'react';
import styles from './CTA.module.css';

// PUBLIC_INTERFACE
export default function CTA() {
  /** Bottom CTA strip to create an event on Eventify. */
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.row}`}>
        <div>
          <h3 className={styles.title}>Create an event with Eventify</h3>
          <p className={styles.sub}>
            Got a show, event, activity or a great experience? Partner with us &amp; get listed on Eventify
          </p>
        </div>
        <div>
          <button className="btn btn--yellow" type="button">
            Create Event
            <span className="icon-event-add" style={{ color: 'var(--color-navy)', width: 44, height: 44 }}></span>
          </button>
        </div>
      </div>
    </section>
  );
}
