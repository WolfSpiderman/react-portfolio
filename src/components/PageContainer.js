import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  useEffect(() => {
    document.title = `${currentPage} - Joshua Jenkins Portfolio`;
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, null, `/${page.toLowerCase()}`);
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#f8dac0' }}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}