import './Contact.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';




const Contact = () => {
    return (
        <section className="contact">
            <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<CallIcon />}>Call</Button>
            <Button variant="outlined" startIcon={<EmailIcon />}>Email</Button>
            </Stack>
            <div className="buttons">
                <button className="contact-buttons">Mail</button>
                
            </div>
            <article className="contact-form">
                <form>
                    <input
                        placeholder="Email Address"
                        type="email"
                        required
                    />
                    <input 
                        type="text"
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        placeholder="Write your message here."
                        cols="20"
                        rows="10"
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </article>
        </section>
    )
};

export default Contact;