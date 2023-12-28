import './Contact.css';

import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
    return (
        <section className="contact">
            <div className="mail-container">
                <MailIcon />
            </div>
            <button>Mail</button>
            <button>Call</button>
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
                        rows="20"
                        required
                    />
                    <button type="submit">Send Email</button>
                </form>
            </article>
        </section>
    )
};

export default Contact;