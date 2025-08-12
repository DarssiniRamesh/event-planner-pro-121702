import React, { useState } from 'react';
import styles from './EventCard.module.css';

// PUBLIC_INTERFACE
export default function EventCard(props) {
  /**
   * Card for events with media, category pill, date, title, metadata, price and interest.
   * Props include:
   * - category, dateMonth, dayStart, dayEnd, title, location, time, priceLabel, interestedLabel
   * - optional country (renders a country pill on the media)
   */
  const {
    category, dateMonth, dayStart, dayEnd,
    title, location, time, priceLabel, interestedLabel, country,
  } = props;

  const [fav, setFav] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {country ? <div className={`pill pill--country ${styles.country}`}>{country}</div> : null}
        <div className={`pill pill--category ${styles.category}`}>{category}</div>
        <button
          className={styles.fav}
          aria-label="Mark interested"
          onClick={() => setFav(!fav)}
        >
          <svg className={styles.star} viewBox="0 0 24 24" fill={fav ? 'currentColor' : 'none'} stroke="currentColor">
            <path d="M12 2l3.09 6.31L22 9.24l-5 4.88L18.18 22 12 18.56 5.82 22 7 14.12l-5-4.88 6.91-1L12 2z"/>
          </svg>
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.dateBlock}>
          <div className={styles.month}>{dateMonth}</div>
          <div className={styles.dayRange}>
            <span>{dayStart}</span>
            {dayEnd ? <span>-</span> : null}
            {dayEnd ? <span>{dayEnd}</span> : null}
          </div>
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          {location ? <div className={styles.meta}>{location}</div> : null}
          {time ? <div className={styles.meta}>{time}</div> : null}
          <div className={styles.metaRow}>
            {priceLabel ? (
              <span className={styles.price}>
                <span className="icon-ticket" aria-hidden="true" style={{ width: 18, height: 18 }} />
                {priceLabel}
              </span>
            ) : null}
            {priceLabel && interestedLabel ? <span className={styles.dot} /> : null}
            {interestedLabel ? <span>{interestedLabel}</span> : null}
          </div>
        </div>
      </div>
    </article>
  );
}
