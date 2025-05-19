// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import '../styles/Home.css';

function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Study Circle</h1>
        <p>Your one-stop platform for educational resources and study materials</p>
        {currentUser ? (
          <Link to="/dashboard" className="cta-button">Go to Dashboard</Link>
        ) : (
          <Link to="/register" className="cta-button">Join Now</Link>
        )}
      </div>
      <div className="features-section">
        <div className="feature">
          <h2>Access Study Materials</h2>
          <p>Find and download high-quality study materials from our extensive library</p>
        </div>
        <div className="feature">
          <h2>Share Your Knowledge</h2>
          <p>Upload your own study materials and help other students</p>
        </div>
        <div className="feature">
          <h2>Affordable Plans</h2>
          <p>Choose from our range of affordable membership plans</p>
        </div>
      </div>
    </div>
  );
}

export default Home;