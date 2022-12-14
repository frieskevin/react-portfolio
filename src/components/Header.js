import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Resume from './Resume';
import About from './About';
import NavTabs from './NavTabs';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    //renders whichever page is selected by the navtabs
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />
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
        <div className='container position-relative bgjet textyg'>
            <h1 className='bgyg textjet header'>Kevin Fries</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}