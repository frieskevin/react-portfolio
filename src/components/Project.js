import React, { useState } from 'react';

export default function Project() {
    const [projectData] = useState([
        {
            name: 'Photo-port',
            link: 'https://frieskevin.github.io/photo-port/',
            image: 'photo-port'
        },
        {
            name: 'Photo-port',
            link: 'https://frieskevin.github.io/photo-port/',
            image: 'photo-port'
        },
        {
            name: 'Photo-port',
            link: 'https://frieskevin.github.io/photo-port/',
            image: 'photo-port'
        },
        {
            name: 'Photo-port',
            link: 'https://frieskevin.github.io/photo-port/',
            image: 'photo-port'
        }
    ]);
    const projects = projectData.map((data) =>
        <div id={data.name} className='flex-row'>
            <a href={data.link}>
                <h2>{data.name}</h2>
                <img src={require(`../assets/img/${data.image}.png`)} alt='app in use'></img>
            </a>
        </div>)
    return (
        <>
            {projects}
        </>
    )
}