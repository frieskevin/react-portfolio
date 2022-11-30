import React from 'react';

export default function Footer() {
    return (
        <div className='container align-center'>
            <div className='row'>
                <div className='col-2'>
                    <img className="float-start" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github logo' />
                </div>
                <div className='col-2'>
                    <img className="float-end" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg" alt='linked in logo' />
                </div>

            </div>
        </div>
    )
}