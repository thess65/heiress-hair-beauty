import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            <div>
                <h2>Contact Information</h2>
                <p>Email: <a href="mailto:heiresshairempire1045@gmail.com">heiresshairempire1045@gmail.com</a></p>
                <p>Phone: <a href="tel:+27835085097">+27835085097</a></p>
            </div>
            <div>
                <h2>Follow Us</h2>
                <ul>
                    <li><a href="https://www.youtube.com/user/@heiresshairempire">YouTube: @heiresshairempire</a></li>
                    <li><a href="https://www.instagram.com/heiress_2">Instagram: @heiress_2</a></li>
                    <li><a href="https://www.facebook.com/HeiressHairBeautyEmpire">Facebook: Heiress Hair & Beauty Empire</a></li>
                    <li><a href="https://www.pinterest.com/@heiress.1">Pinterest: @heiress.1</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;