import React, { useState } from 'react';
import logo from "../Assets/logo horizontal.png";
import dashboard from "../Assets/dashboard.png";
import logout from "../Assets/logout.png";
import profile from "../Assets/profile.png";
import upload from "../Assets/upload.png";
import verify from "../Assets/verify.png";

const FeatureCards = () => {
  return (
    
    <div className="flex justify-center items-center min-h-[100vh] w-full font-montserrat">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
        <div
          className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ width: 350, padding: 40 }}
          onClick={() => window.location.href = '/upload'}
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center">
            <img src={upload} alt="Upload Logo" className="w-20 h-auto text-white"/>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontSize: '24px' }}>Upload</h3>
          <p className="text-gray-600" style={{ fontSize: '15px' }}>Upload Your File Here</p>
          <button className="mt-8 text-slate-600 font-semibold flex items-center justify-center mx-auto group" style={{ fontSize: '16px' }}>
            Upload Here
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        <div
          className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ width: 350, padding: 40 }}
          onClick={() => window.location.href = '/verify'}
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center">
            <img src={verify} alt="Verify Logo" className="w-20 h-auto text-white"/>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Verify</h3>
          <p className="text-gray-600">Verify Your File Here</p>
          <button className="mt-6 text-slate-600 font-semibold flex items-center justify-center mx-auto group">
            Verify Here 
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'Aditya',
    lastName: 'Premana',
    email: 'Aditgaming01@gmail.com',
    contact: '09991877237',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving profile:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-transparent p-8 font-montserrat">
      <h1 className="text-5xl font-bold mb-10 text-white">My Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-base font-semibold mb-2 text-white">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg p-3 text-lg bg-transparent text-white focus:bg-white focus:text-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-base font-semibold mb-2 text-white">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-lg p-3 text-lg bg-transparent text-white focus:bg-white focus:text-gray-900 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-base font-semibold mb-2 text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 text-lg bg-transparent text-white focus:bg-white focus:text-gray-900 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-base font-semibold mb-2 text-white">Contact Number</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full border border-gray-300 rounded-lg p-3 text-lg bg-transparent text-white focus:bg-white focus:text-gray-900 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-base font-semibold mb-2 text-white">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 text-lg bg-transparent text-white focus:bg-white focus:text-gray-900 focus:outline-none"
          />
        </div>
        <div className="flex gap-6 mt-8">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-transparent border border-[#BFC9D9] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#BFC9D9] hover:text-[#476072] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#BFC9D9] text-[#476072] px-8 py-2 rounded-lg font-semibold hover:bg-[#476072] hover:text-white transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const Homepage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    setActiveButton("logout"); // Place your logout logic here
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-[#334257] to-[#6F8FBD] font-montserrat">
      {/* Sidebar */}
      <div className="w-60 min-w-[180px] bg-[#D9D9D9] text-[#476072] flex flex-col items-center py-6 h-full fixed left-0 top-0 z-10">
        <img src={logo} alt="VeryProof Logo" className="w-32 mb-10" />
        <button
          className={`w-11/12 py-3 mb-2 rounded-lg flex items-center justify-start pl-6 text-lg font-montserrat font-semibold transition-colors duration-300 ${
            activeButton === "dashboard" ? "bg-[#548CA8] text-white" : "bg-transparent text-[#476072] hover:bg-[#BFC9D9] hover:text-[#476072]"
          }`}
          style={{ borderRadius: '12px' }}
          onClick={() => setActiveButton("dashboard")}
        >
          <img src={dashboard} alt="Dashboard Icon" className="text-[#476072] text-base mr-5" />
          Dashboard
        </button>
        <button
          className={`w-11/12 py-3 mb-2 rounded-lg flex items-center justify-start pl-6 text-lg font-montserrat font-semibold transition-colors duration-300 ${
            activeButton === "profile" ? "bg-[#548CA8] text-white" : "bg-transparent text-[#476072] hover:bg-[#BFC9D9] hover:text-[#476072]"
          }`}
          style={{ borderRadius: '12px' }}
          onClick={() => setActiveButton("profile")}
        >
          <img src={profile} alt="Profile Icon" className="text-[#476072] text-base mr-5" />
          Profile
        </button>
        <button
          className={`w-11/12 py-3 mb-2 rounded-lg flex items-center justify-start pl-6 text-lg font-montserrat font-semibold transition-colors duration-300 ${
            activeButton === "logout" ? "bg-[#548CA8] text-white" : "bg-transparent text-[#476072] hover:bg-[#BFC9D9] hover:text-[#476072]"
          }`}
          style={{ borderRadius: '12px' }}
          onClick={handleLogoutClick}
        >
          <img src={logout} alt="Logout Icon" className="text-[#476072] text-base mr-5" />
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-60 p-12 bg-gradient-to-br from-[#334257] to-[#6F8FBD] min-h-screen overflow-y-auto">
        {activeButton === "profile" ? <ProfileForm /> : <FeatureCards />}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50 hover:backdrop-blur-lg transition-all duration-500">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center font-montserrat">
            <p className="mb-6 text-montserrat font-semibold text-[#476072]">Are you sure want to log out?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmLogout}
                className="bg-[#476072] text-white px-4 py-2 rounded-lg hover:bg-[#476072]"
              >
                Yes
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;