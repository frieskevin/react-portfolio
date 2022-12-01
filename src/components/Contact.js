import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Footer from './Footer';

export default function Contact() { 
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
          }
    }
    return (
        <section>
            <h3>Contact Me</h3>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name' className='form-label'>Name:</label>
                    <input className='form-control' type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input className='form-control' type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea className='form-control' name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
            <Footer />
        </section>
    )
}