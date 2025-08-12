import React from 'react';
import './App.css';
import './styles/tokens.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root application component with routing.
   * Registers routes for Home, Events, About, and Contact so the Header NavLink
   * can highlight the active tab based on the current URL.
   *
   * Routes:
   * - "/" -> Home
   * - "/events" -> Events listing page (placeholder)
   * - "/about" -> About page (placeholder)
   * - "/contact" -> Contact page (placeholder)
   * - "*" -> Fallback to Home
   */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
