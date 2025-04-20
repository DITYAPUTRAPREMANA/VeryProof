import React, { useState } from "react";
import "./login.css";
import logo from "../Assets/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="VeryProof Logo" className="logo" />
        
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="password-field">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={togglePassword}
            >
              <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </button>
          </div>
        </div>

        <div className="footer">
          <a href="/" className="register-link">Register?</a>
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
