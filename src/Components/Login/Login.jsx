import React, { useState } from "react";
import "./login.css";
import logo from "../assets/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src={logo} alt="VeryProof logo" className="logologin" />
        </div>

        <div className="input-group-login">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group-login">
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
              <i className="fa fa-eye-slash"></i>
            </button>
          </div>
        </div>

        <div className="register-link-container">
          <a href="/register" className="register-link">Register?</a>
        </div>

        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
