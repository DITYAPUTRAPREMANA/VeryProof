import React, { useState } from "react";
import "./register.css";
import logo from "../Assets/logoo.png";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src={logo} alt="VeryProof Logo" className="logoregister" />
        </div>
        
        <div className="input-group-login">
          <label>Email</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>


        <div className="input-group-register">
          <label>Password</label>
          <div className="password-field">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Create Password" 
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


        <div className="input-group-register">
          <label>Confirm Password</label>
          <div className="password-field">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm Your Password" 
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={toggleConfirmPassword}
            >
              <i className="fa fa-eye-slash"></i>
            </button>
          </div>
        </div>


        <div className="otp-container">
          <button className="send-otp-button">Send OTP</button>
          <input 
            type="text" 
            className="otp-input" 
            placeholder="Enter Your OTP" 
            maxLength="4"
            pattern="[0-9]*" 
          />
        </div>


        <div className="login-link-container">
          <a href="/login" className="login-link">Already have an account? Login</a>
        </div>
        
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};


export default Register;
