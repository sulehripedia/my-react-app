// src/pages/Contact.tsx
import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
   

      <div className="contact-content">
        <form className="contact-form">
               <h1 className="contact-title">CONTACT US</h1>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
