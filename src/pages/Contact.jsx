// src/pages/Contact.js
import React, { useState } from 'react';
// import '../styles/Contact.css';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have questions or need help? Reach out to our team and we'll get back to you as soon as possible.</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <h3>Email</h3>
            <p>support@studycircle.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Education Lane<br />Learning City, ED 12345</p>
          </div>
          <div className="contact-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 5pm<br />Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="contact-form-container">
        <h3>Send us a message</h3>
        {submitted ? (
          <div className="contact-success">
            <p>Thank you for your message! We'll get back to you shortly.</p>
            <button onClick={() => setSubmitted(false)} className="contact-button">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="contact-button"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;