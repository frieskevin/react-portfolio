import React from 'react';
import gitHub from '../assets/img/github.svg';
import linkedIn from '../assets/img/linkedin.svg';
import stackOverflow from '../assets/img/stackoverflow.svg';

export default function Footer() {
    return (
        <div className='bgyg'>
            <div className='row text-center'>
                <div className='col'>
                    <a href='https://github.com/frieskevin'>
                        <img className="" src={gitHub} alt='github logo' />
                    </a>
                </div>
                <div className='col'>
                    <a href='https://www.linkedin.com/in/kevin-fries-9844a8243/'>
                        <img className="" src={linkedIn} alt='linked in logo' />
                    </a>
                </div>
                <div className='col'>
                    <a href='https://stackoverflow.com/users/19417403/alotofsnakes?tab=profile'>
                        <img className="" src={stackOverflow} alt='stackoverflow logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}