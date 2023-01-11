import React from 'react';
import gitHub from '../assets/img/github.svg';
import linkedIn from '../assets/img/linkedin.svg';
import stackOverflow from '../assets/img/stackoverflow.svg';

export default function Footer() {
    return (

        <div className='d-flex justify-content-center bgyg py-3'>
            <div className=''>
                <a href='https://github.com/frieskevin'>
                    <img className="" src={gitHub} alt='github logo' />
                </a>
            </div>
            <div className=''>
                <a href='https://www.linkedin.com/in/frieskevin/'>
                    <img className="" src={linkedIn} alt='linked in logo' />
                </a>
            </div>
        </div>

    )
}