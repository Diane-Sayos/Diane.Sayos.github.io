import './Contact.css';


const Contact = () => {
    return (
        <section className="contact">
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