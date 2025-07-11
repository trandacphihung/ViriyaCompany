// src/pages/ContactPage.js
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-image">
          <img src="/images/contact/contact.png" alt="Our Team" />
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out for any inquiries.</p>
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Your Email</label>
            <input type="email" placeholder="Enter your email address" required />

            <label>Your Message</label>
            <textarea placeholder="What would you like to discuss?" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          className="contact-map"
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.897231223678!2d100.52965191527077!3d13.745194690356033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edb9936978b%3A0x24f478aa7817cd62!2sBangkok!5e0!3m2!1sen!2sth!4v1624517179995!5m2!1sen!2sth"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
