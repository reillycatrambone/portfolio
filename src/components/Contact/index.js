import React, { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('t2jk90f', 'template_faji5p8', form.current, 'E61vNREVV36FNtuYa')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
        
    }
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
                Contact Me
            </h1>
            <p>
                I am interested in solving difficult problems
                and creating quality products. Please feel free 
                to contact me with any questions or opportunities.
            </p>
            <div className='contact-form'>
                <form ref = {form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder='Subject' type= "text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required/>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send" />
                        </li>
                    </ul>
                </form>
            </div>
            </div>
        </div>
        
    )
}

export default Contact