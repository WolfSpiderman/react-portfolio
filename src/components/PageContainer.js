import React, { useEffect, useState } from 'react';
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

    const renderPage = () => {
        switch (currentPage) {
          case 'About':
            return <About />;
          case 'Portfolio':
            return <Portfolio />;
          case 'Contact':
            return <Contact />;
          case 'Resume':
            return <Resume />;
          default:
            return <About />;
        }
      };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}