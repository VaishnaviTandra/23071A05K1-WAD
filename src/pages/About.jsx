// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Study Circle</h2>
        <p>Empowering learners through accessible education resources since 2020</p>
      </div>
      
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          At Study Circle, we believe that quality education should be accessible to everyone.
          Our mission is to create a collaborative platform where students and educators can
          share knowledge, resources, and support each other in their learning journey.
        </p>
      </div>
      
      <div className="about-section">
        <h3>Our Story</h3>
        <p>
          Study Circle began as a small group of university students sharing notes and
          study materials. What started as a simple file-sharing system quickly grew into
          a comprehensive platform serving thousands of learners worldwide. Today, we continue
          to expand our library of resources while maintaining our core values of accessibility,
          quality, and community.
        </p>
      </div>
      
      <div className="about-values">
        <h3>Our Values</h3>
        <div className="values-container">
          <div className="value-item">
            <h4>Accessibility</h4>
            <p>We believe education should be accessible to all, regardless of background or circumstances.</p>
          </div>
          <div className="value-item">
            <h4>Quality</h4>
            <p>We maintain high standards for all content on our platform to ensure valuable learning experiences.</p>
          </div>
          <div className="value-item">
            <h4>Community</h4>
            <p>We foster a supportive community where knowledge sharing and collaboration thrive.</p>
          </div>
          <div className="value-item">
            <h4>Innovation</h4>
            <p>We continuously improve our platform to meet the evolving needs of learners.</p>
          </div>
        </div>
      </div>
      
      <div className="about-cta">
        <h3>Join Our Community</h3>
        <p>
          Ready to start your learning journey with Study Circle? Join thousands of students
          and educators already benefiting from our platform.
        </p>
        <Link to="/register" className="about-button">Register Now</Link>
      </div>
    </div>
  );
}

export default About;