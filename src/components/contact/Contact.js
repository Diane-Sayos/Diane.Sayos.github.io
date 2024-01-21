import './Contact.css';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const serviceId = "service_pbtbshk";
    const templateId = "template_b4b4ly7";
    const publicKey = "JxcTAhgwPAFVho8mf";

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let templateParams = {
            from_name: name,
            from_phone: phone,
            from_email: email,
            message: message
          };
          emailjs.send(serviceId, templateId, templateParams, publicKey) //use your Service ID and Template ID
            .then(function (response) {
                setLoading(false);
                setName('');
                setEmail('');
                setMessage('');
                setPhone('');
                handleOpenModal();
            }, function (error) {
              console.log('FAILED...', error);
            });
    }
    return (
        <section className="contact">
            <article className='modal-container'>
                <Modal
                    open={ modalOpen }
                    onClose={ handleCloseModal }
                    aria-labelledby="Message Status"
                    aria-describedby="Message sent successfully."
                >
                    <Box sx={ style }>
                        <Typography id="message-status" variant="h6" component="h2">
                            Message Sent Successfully!
                        </Typography>
                    </Box>
                </Modal>
            </article>
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
                        rows="9"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    {/* <button type="submit">Send Message</button> */}
                    <LoadingButton onClick={(e) => handleSubmit(e)} loading={loading} loadingPosition="center" startIcon={<SendIcon />} variant="outlined">Send Message</LoadingButton>
                </form>
            </article>
        </section>
    )
};

export default Contact;