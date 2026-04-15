import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Insights from './pages/Insights';
import Subscribe from './pages/Subscribe';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/expertise" element={<Home />} /> {/* Placeholder */}
            <Route path="/impact" element={<Home />} /> {/* Placeholder */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
