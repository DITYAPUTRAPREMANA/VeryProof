import React, { useState } from 'react';
import "./profile.css";
import logo from "../Assets/logo horizontal.png";

const profile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Aditya',
    lastName: 'Premana',
    email: 'Aditgaming01@gmail.com',
    contact: '09991877237',
    password: '',
  });

  const [activeButton, setActiveButton] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setActiveButton("cancel");
    // Tambahkan logika reset atau navigasi jika diperlukan
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveButton("save");
    console.log('Saving profile:', formData);
  };

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
          className={`nav-btn  ${activeButton === "profile" ? "active" : ""}`}
          onClick={() => setActiveButton("profile")}
        >
        Profile
        </button>

        <button
          className={`nav-btn ${(activeButton === "logout") ? "active" : ""}`}
          onClick={() => setActiveButton("logout")}
        >
        Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">My Profile</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="field">
            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="button-group">
            <button
              type="button"
              className={`cancel ${activeButton === "save" ? "active" : ""}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`save ${activeButton === "cancel" ? "active" : ""}`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profile;
