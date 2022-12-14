import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <>
        <ul className='nav nav-tabs justify-content-end float'>
            <li className='nav-item'>
                <a href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
            </li>
            <li className='nav-item'>
                <a href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </a>
            </li>
            <li className='nav-item'>
                <a href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </a>
            </li>
        </ul>
        </>
    )
}