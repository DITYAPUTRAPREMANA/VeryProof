import React from 'react';
import logo from '../assets/logo_putih.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1960px] mx-auto">
        <div className="flex items-center justify-between h-[70px] px-4 sm:px-6 md:px-8 
                      bg-white/5 backdrop-blur-md border border-white/15 
                      shadow-lg shadow-[rgba(31,38,135,0.37)]">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-[50px] w-auto object-contain" />
          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-8">
            <li>
              <a 
                href="/" 
                className="text-white font-semibold text-lg hover:text-[#1a3c5b] transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                a href="/about" 
                className="text-white font-semibold text-lg hover:text-[#1a3c5b] transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="text-white font-semibold text-lg hover:text-[#1a3c5b] transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 text-[#FFFFFF] border border-[#548CA8] rounded-full 
                       font-semibold text-base sm:text-lg transition-all duration-300
                       hover:bg-[#FFFFFF]/10"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-2 bg-[#548CA8] text-white rounded-full 
                       font-semibold text-base sm:text-lg transition-all duration-300
                       hover:bg-[#384f5f]"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;