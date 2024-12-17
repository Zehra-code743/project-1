"use client";
import React from "react";
import styles from './Contact-section.module.css';

const ContactPage = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto text-center">
        <h2 className="contact-heading">Contact Me</h2>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
          />
          <button className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
