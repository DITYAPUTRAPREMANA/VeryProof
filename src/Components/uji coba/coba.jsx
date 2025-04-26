import React, { useState } from "react";
//import { QRCodeCanvas } from "qrcode.react"; // Library untuk membuat QR code
import "./coba.css";

const Coba = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State untuk menyimpan satu file
  const [previewURL, setPreviewURL] = useState(null); // State untuk menyimpan URL preview
  const [isProcessing, setIsProcessing] = useState(false); // State untuk menandai proses sedang berjalan
  const [showPopup, setShowPopup] = useState(false); // State untuk mengontrol visibilitas pop-up verifikasi

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Ambil file pertama yang diunggah
    setSelectedFile(file);

    // Generate preview URL untuk file
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreviewURL(fileURL);
    }
  };

  const handleRemoveFile = () => {
    // Hapus file yang dipilih
    setSelectedFile(null);
    setPreviewURL(null); // Hapus URL preview
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("File submitted:", selectedFile.name);
      setIsProcessing(true); // Tampilkan animasi proses

      // Simulasikan proses selama 3 detik
      setTimeout(() => {
        setIsProcessing(false); // Sembunyikan animasi proses
        setShowPopup(true); // Tampilkan pop-up verifikasi
      }, 3000);
    } else {
      alert("No file selected to submit!");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Sembunyikan pop-up tanpa mereset file
  };

  return (
    <div className="upload-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="upload-box">
          <label htmlFor="file-upload" className="upload-label">
            <div className="upload-icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p>Browse File to upload</p>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden-input"
          />
        </div>

        {selectedFile ? (
          <div className="file-info">
            <i className="fas fa-file-alt file-icon"></i>
            <span>{selectedFile.name}</span>
            <div className="file-actions">
              <button
                type="button"
                className="remove-btn"
                onClick={handleRemoveFile}
              >
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="file-info">
            <i className="fas fa-file-alt file-icon"></i>
            <span>No file selected</span>
          </div>
        )}

        {/* Preview Section */}
        {previewURL && (
          <div className="preview-container">
            <p>File Preview:</p>
            {selectedFile.type.startsWith("image/") ? (
              <img
                src={previewURL}
                alt="Preview"
                className="file-preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  marginTop: "10px",
                }}
              />
            ) : (
              <iframe
                src={previewURL}
                title="File Preview"
                className="file-preview"
                style={{
                  width: "100%",
                  height: "200px",
                  border: "1px solid #e2e8f0",
                  marginTop: "10px",
                }}
              ></iframe>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="submit-wrapper">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>

      {/* Animasi Proses */}
      {isProcessing && (
        <div className="processing-overlay">
          <div className="processing-spinner"></div>
          <p>Processing your file...</p>
        </div>
      )}

      {/* Pop-up Verifikasi */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup animate-popup">
            <h3>File Anda Telah Diverifikasi!</h3>
            <p>File Anda telah berhasil diproses dan diverifikasi.</p>
            <button className="close-btn" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coba;