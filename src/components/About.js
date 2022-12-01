import React from 'react';
import Footer from './Footer';

export default function About() {
    return (
        <div className='container'>
            <img src={require(`../assets/img/kevin.jpg`)} alt='person eating ice cream' className='rounded i'></img>
            <h1>About me</h1>
            <p>I am a former cook with experience making just about anything you can think of, turned full stack web developer.  
                I have focused mainly on newer technologies, but learned the basics to have a solid foundation and capablity to 
                work with just about anything thrown at me.  I have focused mainly on learning React, GraphQL, Mongoose, Express, and Node, 
                but have experience with HTML, CSS, Git, JavaScript, SQL, NoSQL, PWA's, and am capable of learning anything.
            </p>
        <Footer />
        </div>
        
    )
}