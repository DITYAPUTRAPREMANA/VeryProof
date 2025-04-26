import React, { useState } from 'react';
import "./homepage.css";
import logo from "../Assets/logo horizontal.png";

const FeatureCards = () => {
  return (
    <div className="feature-container">
      <div className="feature-card">
        <div className="icon-circle">
          <i className="upload-icon" />
        </div>
        <h3>Upload</h3>
        <p>Select certificate file for verification.</p>
        <a href="#" className="action-link">Upload Now →</a>
      </div>

      <div className="feature-card">
        <div className="icon-circle">
          <i className="verify-icon" />
        </div>
        <h3>Verify</h3>
        <p>Start verifying your certificate now.</p>
        <a href="#" className="action-link">Verify Now →</a>
      </div>
    </div>
  );
};

const Homepage = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="VeryProof Logo" className="logo-image" />
        <button
          className={`nav-btn ${activeButton === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveButton("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={`nav-btn ${activeButton === "profile" ? "active" : ""}`}
          onClick={() => setActiveButton("profile")}
        >
          Profile
        </button>

        <button
          className={`nav-btn ${activeButton === "logout" ? "active" : ""}`}
          onClick={() => setActiveButton("logout")}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <FeatureCards />
      </div>
    </div>
  );
};

export default Homepage;
