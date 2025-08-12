import React from 'react';
import styles from './Footer.module.css';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with multiple columns, social links, and legal copy. */
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h4>Company Info</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#careers">Careers</a>
            <a href="#faqs">FAQs</a>
            <a href="#tos">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="#account">Account Support</a>
            <a href="#list">Listing Events</a>
            <a href="#ticketing">Event Ticketing</a>
            <a href="#terms">Ticket Purchase Terms &amp; Conditions</a>
          </div>
          <div>
            <h4>Categories</h4>
            <a href="#concerts">Concerts &amp; Gigs</a>
            <a href="#festivals">Festivals &amp; Lifestyle</a>
            <a href="#business">Business &amp; Networking</a>
            <a href="#food">Food &amp; Drinks</a>
            <a href="#arts">Performing Arts</a>
            <a href="#sports">Sports &amp; Outdoors</a>
            <a href="#exhibitions">Exhibitions</a>
            <a href="#workshops">Workshops, Conferences &amp; Classes</a>
          </div>
          <div className={styles.apps}>
            <h4>Follow Us</h4>
            <a href="#fb">Facebook</a>
            <a href="#ig">Instagram</a>
            <a href="#tw">Twitter</a>
            <a href="#yt">Youtube</a>

            <h4 className="mt-24">Download The App</h4>
            <div>
              <div className="pill pill--country" style={{ display: 'inline-flex', gap: 10 }}>Google Play</div>
            </div>
            <div className="mt-12">
              <div className="pill pill--country" style={{ display: 'inline-flex', gap: 10 }}>App Store</div>
            </div>
          </div>
        </div>

        <div className={styles.line} />

        <div className={styles.copy}>
          <div className={styles.copyBadge}>
            <div className={styles.copyDot}></div>
          </div>
          <p>2023 Eventify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
