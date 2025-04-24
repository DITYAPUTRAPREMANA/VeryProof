import React from 'react';
import Navbar from "../Navbar/navbar";
import accuracy from '../assets/telpon.png'
import Authen from '../assets/email.png'

const Contact = () => {
  return (
    <div style={{height: '100vh', width: '1980px'}} className="bg-gradient-to-br from-[#334257] to-[#6F8FBD] overflow-y-auto">
      <Navbar />
      {/* About Section */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-[96px] text-center text-white font-bold mb-4">Have Questions?</h1>
          <p className="text-[30px] text-center text-white mb-20">Contact Us</p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 max-w-4xl mx-auto">
            {/* Authenticity Card */}
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-8 text-center 
                          transform transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center">
              <img src={Authen} alt="Accuracy Logo" className="w-20 h-auto text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontSize: '24px' }}>Email</h3>
              <p className="text-gray-600" style={{ fontSize: '15px' }}>Blablabla@gmail.com</p>
              <button className="mt-8 text-slate-600 font-semibold flex items-center justify-center mx-auto group" style={{ fontSize: '16px' }}>
                Email Us
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Accuracy Card */}
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-8 text-center 
                          transform transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center">
                <img src={accuracy} alt="Accuracy Logo" className="w-20 h-auto text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Call Center</h3>
              <p className="text-gray-600">+134625 26516</p>
              <button className="mt-6 text-slate-600 font-semibold flex items-center justify-center mx-auto group">
                Call Us
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Contact;