import React, { useState } from 'react';
import styles from './Hero.module.css';

// PUBLIC_INTERFACE
export default function Hero() {
  /** Hero section featuring main headline and search bar with location dropdown. */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');

  const locations = [
    { label: 'Mumbai', icon: 'location' },
    { label: 'Detect Current Location', icon: 'location' },
    { label: 'Online', icon: 'location' }
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Don't miss out!
          <br />
          Explore the vibrant events happening locally and globally.
        </h1>

        <div className={styles.searchbar} role="search" aria-label="Search events">
          <div className={styles.searchField} aria-label="Search input">
            <span className="icon-search" style={{ color: 'var(--color-dark-text)' }} />
            <input type="text" placeholder="Search Events, Categories, Location,..." aria-label="Search" />
          </div>
          <div 
            className={styles.searchLoc} 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label="Location"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            role="combobox"
          >
            <span className="icon-location" style={{ color: 'var(--color-grey-600)' }} />
            <span className={styles.locText}>
              {selectedLocation}
              <span className="icon-chevron-down" style={{ color: 'var(--color-grey-600)', width: 16, height: 16 }} />
            </span>
            {isDropdownOpen && (
              <div 
                className={styles.locationDropdown}
                role="listbox"
                aria-label="Select location"
              >
                {locations.map((location) => (
                  <div
                    key={location.label}
                    className={styles.locationOption}
                    onClick={() => handleLocationSelect(location.label)}
                    role="option"
                    aria-selected={selectedLocation === location.label}
                  >
                    <span className={`icon-${location.icon}`} style={{ color: 'var(--color-grey-600)', width: 18, height: 18 }} />
                    {location.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
