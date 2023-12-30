import './Contact.css';

import { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    const serviceId = "service_pbtbshk";
    const templateId = "template_b4b4ly7";
    const publicKey = "JxcTAhgwPAFVho8mf";


    const handleSubmit = (e) => {
        e.preventDefault();
        let templateParams = {
            from_name: name,
            from_phone: phone,
            from_email: email,
            message: message
          };
          emailjs.send(serviceId, templateId, templateParams, publicKey) //use your Service ID and Template ID
            .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
              setName('');
              setEmail('');
              setMessage('');
              setPhone('');
            }, function (error) {
              console.log('FAILED...', error);
            });
    }
    return (
        <section className="contact">
            <article className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Your Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Your Email Address"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Your Phone Number (Pattern: 123-456-7890)"
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Write your message here."
                        cols="20"
                        rows="10"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </article>
        </section>
    )
};

export default Contact;