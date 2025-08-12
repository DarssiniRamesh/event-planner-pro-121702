import React, { useState } from 'react';
import styles from './Newsletter.module.css';

// PUBLIC_INTERFACE
export default function Newsletter() {
  /** Newsletter subscription form with inline button. */
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Mock submission alert as per reference
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <div className={styles.row}>
      <div className={styles.desc}>
        <h3 className="section-title" style={{ marginBottom: 8 }}>Subscribe to our Newsletter</h3>
        <p className="subtitle">Receive our weekly newsletter &amp; updates with new events from your favourite organizers &amp; venues.</p>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Enter your e-mail address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
