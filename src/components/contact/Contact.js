import './Contact.css';


const Contact = () => {
    return (
        <section className="contact">
            <div className="buttons">
                <button className="contact-buttons">Mail</button>
                <button className="contact-buttons">Call</button>
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