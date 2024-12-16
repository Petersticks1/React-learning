

function Contact() {
    return (
        <div className="contact">
            <h3>Contct Us</h3>

            <form action="#">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>

                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Contact;