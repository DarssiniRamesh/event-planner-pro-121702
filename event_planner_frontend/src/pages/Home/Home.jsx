import React, { useMemo, useState } from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import Chips from '../../components/Chips/Chips';
import EventCard from '../../components/EventCard/EventCard';
import Recommendation from '../../components/Recommendation/Recommendation';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * Eventify Home page composition:
   * - Header
   * - Hero search
   * - Explore Categories
   * - Popular Events (with chips filter)
   * - Online Events
   * - Recommendation banner
   * - Trending Events (with country pill)
   * - CTA Strip
   * - Newsletter
   * - Footer
   */

  // Categories
  const categories = [
    'Entertainment',
    'Educational & Business',
    'Cultural & Arts',
    'Sports & Fitness',
    'Technology & Innovation',
    'Travel & Adventure',
  ];

  // Event data modeled from the design HTML (expanded to 6 per section to match Figma)
  const popularEvents = [
    {
      id: 'p1',
      category: 'Travel & Adventure',
      dateMonth: 'NOV',
      dayStart: '25',
      dayEnd: '26',
      title: 'Lakeside Camping at Pawna',
      location: 'Adventure Geek - Explore the Unexplored, Mumbai',
      time: '8:30 AM - 7:30 PM',
      priceLabel: 'INR 1,400',
      interestedLabel: '14 interested',
      tags: ['weekend'],
      priceType: 'paid',
    },
    {
      id: 'p2',
      category: 'Cultural & Arts',
      dateMonth: 'DEC',
      dayStart: '02',
      title: 'Sound Of Christmas 2023',
      location: 'Bal Gandharva Rang Mandir, Mumbai',
      time: '6:30 PM - 9:30 PM',
      priceLabel: 'INR 499',
      interestedLabel: '16 interested',
      tags: ['today'],
      priceType: 'paid',
    },
    {
      id: 'p3',
      category: 'Educational & Business',
      dateMonth: 'DEC',
      dayStart: '03',
      title: 'Global Engineering Education Expo 2023',
      location: 'The St. Regis, Mumbai',
      time: '10 AM - 2 PM',
      priceLabel: 'FREE',
      interestedLabel: '48 interested',
      tags: ['tomorrow'],
      priceType: 'free',
    },
    // Added to ensure 6 cards per Figma section
    {
      id: 'p4',
      category: 'Sports & Fitness',
      dateMonth: 'DEC',
      dayStart: '10',
      title: 'Marine Drive 5K Fun Run',
      location: 'Marine Drive, Mumbai',
      time: '6 AM - 9 AM',
      priceLabel: 'INR 299',
      interestedLabel: '32 interested',
      tags: ['weekend'],
      priceType: 'paid',
    },
    {
      id: 'p5',
      category: 'Technology & Innovation',
      dateMonth: 'DEC',
      dayStart: '09',
      title: 'AI for Everyone: Intro Workshop',
      location: 'WeWork BKC, Mumbai',
      time: '11 AM - 1 PM',
      priceLabel: 'FREE',
      interestedLabel: '64 interested',
      tags: ['today'],
      priceType: 'free',
    },
    {
      id: 'p6',
      category: 'Cultural & Arts',
      dateMonth: 'NOV',
      dayStart: '30',
      title: 'Street Art Walk - Bandra',
      location: 'Bandra West, Mumbai',
      time: '5 PM - 7 PM',
      priceLabel: 'INR 199',
      interestedLabel: '18 interested',
      tags: ['tomorrow'],
      priceType: 'paid',
    },
  ];

  const onlineEvents = [
    {
      id: 'o1',
      category: 'Educational & Business',
      dateMonth: 'JAN',
      dayStart: '13',
      title: 'The Road to Jobs & Internships: LinkedIn Webinar',
      location: 'Online',
      time: '6 PM - 7:30 PM',
      priceLabel: 'INR 49',
      interestedLabel: '21 interested',
      tags: ['today'],
      priceType: 'paid',
    },
    {
      id: 'o2',
      category: 'Sports & Fitness',
      dateMonth: 'NOV',
      dayStart: '29',
      title: 'Online Zumba Dance Fitness Class over Zoom',
      location: 'Online',
      time: '7 PM - 8 PM',
      priceLabel: 'CAD 7',
      interestedLabel: '',
      tags: ['weekend'],
      priceType: 'paid',
    },
    {
      id: 'o3',
      category: 'Cultural & Arts',
      dateMonth: 'DEC',
      dayStart: '12',
      title: 'Easy Book Folding: Christmas Edition',
      location: 'Online',
      time: '4 PM - 5:30 PM',
      priceLabel: 'FREE',
      interestedLabel: '10 interested',
      tags: ['tomorrow'],
      priceType: 'free',
    },
    // Added to ensure 6 cards per Figma section
    {
      id: 'o4',
      category: 'Technology & Innovation',
      dateMonth: 'JAN',
      dayStart: '20',
      title: 'Build a Portfolio in a Day',
      location: 'Online',
      time: '10 AM - 4 PM',
      priceLabel: 'USD 0',
      interestedLabel: '75 interested',
      tags: ['weekend'],
      priceType: 'free',
    },
    {
      id: 'o5',
      category: 'Entertainment',
      dateMonth: 'DEC',
      dayStart: '18',
      title: 'Virtual Open Mic Night',
      location: 'Online',
      time: '8 PM - 10 PM',
      priceLabel: 'FREE',
      interestedLabel: '45 interested',
      tags: ['today'],
      priceType: 'free',
    },
    {
      id: 'o6',
      category: 'Educational & Business',
      dateMonth: 'DEC',
      dayStart: '05',
      title: 'Startup Pitch Practice',
      location: 'Online',
      time: '7 PM - 9 PM',
      priceLabel: 'INR 199',
      interestedLabel: '',
      tags: ['tomorrow'],
      priceType: 'paid',
    },
  ];

  const trendingEvents = [
    {
      id: 't1',
      country: 'India',
      category: 'Entertainment',
      dateMonth: 'NOV',
      dayStart: '25',
      title: 'Voca Loca - Aditya Gadhvi in Vadodara',
      location: 'Satyanarayan Lawns, Vadodara',
      time: '6 PM - 10:30 PM',
      priceLabel: 'INR 450 - 30k',
      interestedLabel: '528 interested',
      tags: ['entertainment'],
      priceType: 'free',
    },
    {
      id: 't2',
      country: 'United States',
      category: 'Educational & Business',
      dateMonth: 'DEC',
      dayStart: '02',
      title: 'Camp United Nations for Girls Los Angeles 2023',
      location: 'Renaissance Los Angeles Airport Hotel',
      time: '8 AM - 12 PM',
      priceLabel: 'USD 125',
      interestedLabel: '',
      tags: ['business'],
      priceType: 'paid',
    },
    {
      id: 't3',
      country: 'Australia',
      category: 'Entertainment',
      dateMonth: 'DEC',
      dayStart: '01',
      dayEnd: '02',
      title: 'Bollywood Gen Z Party',
      location: 'Brown Alley, Melbourne',
      time: '9:30 PM - 3:30 AM',
      priceLabel: 'AUD 0 - 40',
      interestedLabel: '137 interested',
      tags: ['entertainment'],
      priceType: 'paid',
    },
    // Added to ensure 6 cards per Figma section
    {
      id: 't4',
      country: 'United Kingdom',
      category: 'Cultural & Arts',
      dateMonth: 'DEC',
      dayStart: '15',
      title: 'Winter Choir Gala',
      location: 'Royal Albert Hall, London',
      time: '7 PM - 10 PM',
      priceLabel: 'GBP 25 - 65',
      interestedLabel: '302 interested',
      tags: ['arts'],
      priceType: 'paid',
    },
    {
      id: 't5',
      country: 'Canada',
      category: 'Sports & Fitness',
      dateMonth: 'JAN',
      dayStart: '06',
      title: 'Toronto New Year Marathon',
      location: 'Downtown Toronto',
      time: '6 AM - 12 PM',
      priceLabel: 'CAD 30 - 120',
      interestedLabel: '',
      tags: ['sports'],
      priceType: 'paid',
    },
    {
      id: 't6',
      country: 'Singapore',
      category: 'Technology & Innovation',
      dateMonth: 'DEC',
      dayStart: '22',
      dayEnd: '23',
      title: 'DevFest Asia 2023',
      location: 'Suntec Convention Centre, Singapore',
      time: '9 AM - 6 PM',
      priceLabel: 'SGD 0 - 149',
      interestedLabel: '680 interested',
      tags: ['technology'],
      priceType: 'paid',
    },
  ];

  // Filter state for popular section
  const [filter, setFilter] = useState('all');

  const filteredPopular = useMemo(() => {
    if (filter === 'all') return popularEvents;
    if (filter === 'free') return popularEvents.filter(e => e.priceType === 'free');
    return popularEvents.filter(e => (e.tags || []).includes(filter));
  }, [filter, popularEvents]);

  return (
    <div>
      <Header />
      <Hero />
      <section className="section">
        <div className="container">
          <h2 className="section-title">Explore Categories</h2>
          <CategoryGrid items={categories} />
        </div>
      </section>

      <section className={`section ${styles.popularSection}`}>
        <div className="container">
          <h2 className="section-title">Popular Events in Mumbai</h2>
          <Chips
            items={[
              { label: 'All', value: 'all' },
              { label: 'Today', value: 'today' },
              { label: 'Tomorrow', value: 'tomorrow' },
              { label: 'This Weekend', value: 'weekend' },
              { label: 'Free', value: 'free' },
            ]}
            value={filter}
            onChange={setFilter}
          />
          <div className={styles.cardsGrid}>
            {filteredPopular.map((e) => (
              <EventCard key={e.id} {...e} />
            ))}
          </div>
          <div className="center mt-32">
            <button
              className="btn btn--outline-dark"
              type="button"
              onClick={() => alert('Loading more events...')}
            >
              See More
            </button>
          </div>
        </div>
      </section>

      <section className={`section ${styles.onlineSection}`}>
        <div className="container">
          <h2 className="section-title">Discover Best of Online Events</h2>
          <div className={styles.cardsGrid}>
            {onlineEvents.map((e) => (
              <EventCard key={e.id} {...e} />
            ))}
          </div>
          <div className="center mt-32">
            <button
              className="btn btn--outline-dark"
              type="button"
              onClick={() => alert('Loading more events...')}
            >
              See More
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Recommendation />
        </div>
      </section>

      <section className={`section ${styles.trendingSection}`}>
        <div className="container">
          <h2 className="section-title">Trending Events around the World</h2>
        <div className={styles.cardsGrid}>
            {trendingEvents.map((e) => (
              <EventCard key={e.id} {...e} />
            ))}
          </div>
          <div className="center mt-32">
            <button
              className="btn btn--outline-dark"
              type="button"
              onClick={() => alert('Loading more events...')}
            >
              See More
            </button>
          </div>
        </div>
      </section>

      <CTA />

      <Newsletter />

      <Footer />
    </div>
  );
}
