import React from 'react';
import Footer from './Footer';
import resume from '../assets/resume/Kevin-Fries-Resume.pdf';

export default function Resume() { 
    return (
        <div className='text-center'>
            <a href={resume} className='textyg' style={{textDecoration: 'none'}}>
                <h2>Download Resume</h2>
            </a>
            <h2>Skills and Proficiencies</h2>
            
                <p>React</p>
                <p>GraphQL</p>
                <p>JavaScript</p>
                <p>SQL</p>
                <p>Mongoose</p>
                <p>Express</p>
                <p>Node</p>
                <p>CSS</p>
                <p>HTML</p>
            
            <Footer />
        </div>
    )
}