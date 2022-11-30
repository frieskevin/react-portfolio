import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import About from './About';
import NavTabs from './NavTabs';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'About') {
            return <About />
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}