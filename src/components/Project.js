import React, { useState } from 'react';

export default function Project() {
    const [projectData] = useState([
        {
            name: 'Photo port',
            link1: 'https://frieskevin.github.io/photo-port/',
            link2: '',
            image: 'photo-port'
        },
        {
            name: 'Pizza Hunt',
            link1: 'https://afternoon-caverns-54266.herokuapp.com/',
            link2: '',
            image: 'pizza-hunt'
        },
        {
            name: 'Contact cards',
            link1: 'https://frieskevin.github.io/photo-port/',
            link2: '',
            image: 'contact-card'
        },
        {
            name: 'Photo port',
            link1: 'https://frieskevin.github.io/photo-port/',
            link2: '',
            image: 'photo-port'
        },
        {
            name: 'Photo port',
            link1: 'https://frieskevin.github.io/photo-port/',
            link2: '',
            image: 'photo-port'
        },
        {
            name: 'Photo port',
            link1: 'https://frieskevin.github.io/photo-port/',
            link2: '',
            image: 'photo-port'
        }
    ]);
    const projects = projectData.map((data) =>
        <div className='col-5'>
            <a href={data.link1} style={{textDecoration: 'none'}}>
                <h3 className='textyellow'>{data.name}</h3>
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