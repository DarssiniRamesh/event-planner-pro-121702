import React from 'react';
import styles from './Footer.module.css';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with 5 columns (Company Info, Help, Categories, Follow Us, Download The App), official store badges, and legal copy. */
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.col}>
            <h4>Company Info</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#careers">Careers</a>
            <a href="#faqs">FAQs</a>
            <a href="#tos">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
          </div>

          {/* Help */}
          <div className={styles.col}>
            <h4>Help</h4>
            <a href="#account">Account Support</a>
            <a href="#list">Listing Events</a>
            <a href="#ticketing">Event Ticketing</a>
            <a href="#terms">Ticket Purchase Terms &amp; Conditions</a>
          </div>

          {/* Categories */}
          <div className={styles.col}>
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

          {/* Follow Us */}
          <div className={styles.col}>
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a>
          </div>

          {/* Download The App */}
          <div className={`${styles.col} ${styles.download}`}>
            <h4>Download The App</h4>
            <div className={styles.badges}>
              {/* Google Play badge */}
              <a
                className={styles.badge}
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
              >
                <span
                  className={`${styles.badgeIcon} icon-google-play`}
                  aria-hidden="true"
                  focusable="false"
                />
                <span className={styles.badgeText}>
                  <span className={styles.badgeOverline}>GET IT ON</span>
                  <span className={styles.badgeBrand}>Google Play</span>
                </span>
              </a>

              {/* App Store badge */}
              <a
                className={styles.badge}
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
              >
                <span
                  className={`${styles.badgeIcon} icon-apple`}
                  aria-hidden="true"
                  focusable="false"
                />
                <span className={styles.badgeText}>
                  <span className={styles.badgeOverline}>Download on the</span>
                  <span className={styles.badgeBrand}>App Store</span>
                </span>
              </a>
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
