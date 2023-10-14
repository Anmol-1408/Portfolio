import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h1>Contact Me</h1>
            <div className="contact-form">
                <form action="https://api.web3forms.com/submit" method="post">
                    <input type="hidden" name="access_key" value="1ed7500e-271e-41bf-87d4-69bb8d243d2d" />
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="you@domain.com" required />
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message..."
                        required></textarea>
                    <input className="btn" type="submit" value="submit" />
                </form>
            </div>
        </section>
    )
}
