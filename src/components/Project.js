import React, { useState } from 'react';

export default function Project() {
    const [projectData] = useState([
        {
            name: 'Photo-port',
            link: 'https://frieskevin.github.io/photo-port/',
            image: 'photo-port'
        },
        {
            name: 'Pizza Hunt',
            link: 'https://afternoon-caverns-54266.herokuapp.com/',
            image: 'pizza-hunt'
        },
        {
            name: 'Contact cards',
            link: 'https://frieskevin.github.io/photo-port/',
            image: 'contact-card'
        },
        {
            name: 'Photo-port',
            link: 'https://frieskevin.github.io/photo-port/',
            image: 'photo-port'
        }
    ]);
    const projects = projectData.map((data) =>
        <div className='col-5'>
            <a href={data.link} style={{textDecoration: 'none'}}>
                <h2>{data.name}</h2>
                <img className='img-fluid' src={require(`../assets/img/${data.image}.png`)} alt='app in use'></img>
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