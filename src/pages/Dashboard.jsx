// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import '../styles/Dashboard.css';

function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome, {currentUser?.name || 'User'}!</h2>
        <p>Manage your study materials and account from here.</p>
      </div>
      
      <div className="dashboard-options">
        <Link to="/upload" className="dashboard-option">
          <div className="option-icon">📤</div>
          <h3>Upload</h3>
          <p>Share your study materials with the community</p>
        </Link>
        <Link to="/check" className="dashboard-option">
          <div className="option-icon">📚</div>
          <h3>Check</h3>
          <p>Browse and access available study materials</p>
        </Link>
      </div>
      
      <div className="dashboard-info">
        <div className="info-card">
          <h3>Account Status</h3>
          <p>Active</p>
          <Link to="/payment" className="dashboard-link">View Payment Details</Link>
        </div>
        <div className="info-card">
          <h3>Your Uploads</h3>
          <p>2 documents</p>
          <Link to="/upload" className="dashboard-link">Manage Uploads</Link>
        </div>
        <div className="info-card">
          <h3>Recent Activity</h3>
          <p>Last login: Today</p>
          <Link to="/check" className="dashboard-link">View Downloaded Materials</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;