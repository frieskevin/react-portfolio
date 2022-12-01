import React, { useState } from 'react';
import gitHub from '../assets/img/github.svg'

export default function Project() {
    const [projectData] = useState([
        {
            name: 'Photo port',
            link1: 'https://github.com/frieskevin/photo-port',
            link2: 'https://frieskevin.github.io/photo-port/',
            image: 'photo-port'
        },
        {
            name: 'Pizza Hunt',
            link1: 'https://github.com/frieskevin/pizza-hunt',
            link2: 'https://afternoon-caverns-54266.herokuapp.com/',
            image: 'pizza-hunt'
        },
        {
            name: 'Contact cards',
            link1: 'https://github.com/frieskevin/contact-card',
            link2: 'https://frieskevin.github.io/contact-card/',
            image: 'contact-card'
        },
        {
            name: 'Xdream',
            link1: 'https://github.com/llacourciere/Xdream',
            link2: 'https://nameless-falls-05978.herokuapp.com/',
            image: 'xdream'
        },
        {
            name: 'Just Tech News',
            link1: 'https://github.com/frieskevin/just-tech-news',
            link2: 'https://frieskevin.github.io/just-tech-news/',
            image: 'jtn'
        },
        {
            name: 'U Develop It',
            link1: 'https://github.com/frieskevin/u-develop-it',
            link2: 'https://frieskevin.github.io/u-develop-it',
            image: 'udi'
        }
    ]);
    const projects = projectData.map((data) =>
        <div className='col-5'>
            <a href={data.link1} style={{textDecoration: 'none'}}>
                <h3 className='textyg'>{data.name}<img src={gitHub} alt='github logo'/></h3>
            </a>
            <a href={data.link2}>
                <img className='img-fluid rounded' src={require(`../assets/img/${data.image}.png`)} alt='app in use'></img>
            </a>
        </div>)
    return (
        <div className='container text-center'>
            <div className='row'>
            {projects}
            </div>
        </div>
    )
}