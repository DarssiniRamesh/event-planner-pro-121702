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
                <svg
                  className={styles.playIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  {/* Google Play triangle with approximate brand colors */}
                  <path d="M3 2l11 10L3 22V2z" fill="#34A853" />
                  <path d="M14 12l7.5-4.2c.7-.4.7-1.3 0-1.7L17.5 3.9 14 12z" fill="#EA4335" />
                  <path d="M14 12l3.5 8.1 4-2.2c.7-.4.7-1.3 0-1.7L14 12z" fill="#FBBC04" />
                  <path d="M3 22l11-10-2.4-2.2L3 22z" fill="#4285F4" />
                </svg>
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
                <svg
                  className={styles.appleIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  {/* Simplified Apple logo (white) */}
                  <path
                    d="M16.365 12.297c-.012-2.126 1.747-3.151 1.828-3.205-1-1.46-2.55-1.66-3.096-1.68-1.31-.133-2.554.764-3.22.764-.666 0-1.69-.746-2.78-.725-1.43.022-2.762.833-3.505 2.106-1.496 2.593-.381 6.417 1.07 8.515.71 1.025 1.554 2.175 2.666 2.133 1.07-.042 1.473-.691 2.766-.691 1.293 0 1.65.691 2.78.67 1.145-.02 1.868-1.046 2.577-2.075.805-1.175 1.14-2.31 1.152-2.37-.025-.012-2.214-.85-2.24-3.44zM14.12 5.94c.584-.71.98-1.7.872-2.7-.844.034-1.876.56-2.49 1.27-.546.62-1.02 1.61-.89 2.56.94.074 1.923-.48 2.508-1.13z"
                    fill="#fff"
                  />
                </svg>
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
