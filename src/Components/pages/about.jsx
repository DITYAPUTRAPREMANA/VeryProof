import React from 'react';
import Navbar from "../Navbar/navbar";
import accuracy from '../Assets/accuracy.png';
import Simpel from '../Assets/simpel.png';
import Authen from '../Assets/authen.png';
import FadeInOnView from '../fadeinonview'; 

const About = () => {
  return (
    <div style={{ height: '100vh', width: '1980px' }} className="bg-gradient-to-br from-slate-700 to-slate-900 overflow-y-auto">
      <Navbar />
      
      {/* About Section */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <FadeInOnView>
            <h1 className="text-[96px] text-center text-white font-bold mb-4">Our Mission</h1>
          </FadeInOnView>
          <FadeInOnView>
            <p className="text-[30px] text-center text-white mb-20">Authenticity. Accuracy. Simplicity.</p>
          </FadeInOnView>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Authenticity Card */}
            <FadeInOnView>
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-7 text-center transform transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center">
                  <img src={Authen} alt="Authenticity Logo" className="w-20 h-auto text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Authenticity</h3>
                <p className="text-gray-600">Ensuring real and trusted certificates.</p>
                <button className="mt-8 text-slate-600 font-semibold flex items-center justify-center mx-auto group">
                  Get Started
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </FadeInOnView>

            {/* Accuracy Card */}
            <FadeInOnView>
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center">
                  <img src={accuracy} alt="Accuracy Logo" className="w-20 h-auto text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Accuracy</h3>
                <p className="text-gray-600">Every detail checked with precision.</p>
                <button className="mt-6 text-slate-600 font-semibold flex items-center justify-center mx-auto group">
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </FadeInOnView>

            {/* Simplicity Card */}
            <FadeInOnView>
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center">
                  <img src={Simpel} alt="Simplicity Logo" className="w-18 h-auto text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Simplicity</h3>
                <p className="text-gray-600">Verification made easy and fast.</p>
                <button className="mt-6 text-slate-600 font-semibold flex items-center justify-center mx-auto group">
                  Explore
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </FadeInOnView>
          </div>
        </div>
      </section>

     {/* Authenticity Section */}
  <section className="min-h-screen py-45 bg-gradient-to-r from-[#334257] to-[#6F8FBD]">
    <div className="container mx-auto px-4">
    <FadeInOnView>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 mt-40">
          Authenticity
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 mt-8">
        VeryProof guarantees the authenticity of every certificate by validating its origin, issuer, and integrity. We help organizations and individuals ensure that what they present is real and credible. No more doubts only trusted credentials that reflect true achievement and verified identity, backed by secure digital systems.
        </p>
      </div>
    </FadeInOnView>
    </div>
  </section>

{/* Accuracy Section */}
  <section className="min-h-screen py-45 bg-gradient-to-br from-slate-700 to-slate-900 overflow-y-auto">
    <div className="container mx-auto px-4">
    <FadeInOnView>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 mt-40">
          Accuracy
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 mt-8">
        With VeryProof, accuracy isn’t optional it’s built in. Every verification undergoes rigorous checks to ensure data precision, consistency, and reliability. Whether you're a recipient or a verifier, our platform provides clear, error-free results that reflect exactly what was issued, when, and by whom nothing more, nothing less
        </p>
      </div>
    </FadeInOnView>
    </div>
  </section>

{/* Simplicity Section */}
  <section className="min-h-screen py-45 bg-gradient-to-r from-[#334257] to-[#6F8FBD]">
    <div className="container mx-auto px-4">
    <FadeInOnView>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 mt-40">
          Simplicity
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 mt-8">
        Designed with ease in mind, VeryProof makes certificate verification effortless. From scanning a QR code to viewing results, every step is intuitive and seamless. No complicated tools or technical knowledge required just a simple, fast, and accessible way to verify any certificate in seconds, from anywhere.
        </p>
      </div>
  </FadeInOnView>
    </div>
  </section>

    </div>
  );
};

export default About;
