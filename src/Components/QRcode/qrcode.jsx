import React, { useState } from "react";
import './crstyle.css'

const Qrcode = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State untuk menyimpan satu file
  const [previewURL, setPreviewURL] = useState(null); // State untuk menyimpan URL preview
  const [isProcessing, setIsProcessing] = useState(false); // State untuk menandai proses sedang berjalan
  const [showPopup, setShowPopup] = useState(false); // State untuk mengontrol visibilitas pop-up
  const [verificationStatus, setVerificationStatus] = useState(null); // State untuk status verifikasi (success/fail)

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

        // Verifikasi file berdasarkan format
        const isVerified = selectedFile.type === "application/pdf"; // Hanya file PDF yang dianggap berhasil
        setVerificationStatus(isVerified ? "success" : "fail");
        setShowPopup(true); // Tampilkan pop-up
      }, 3000);
    } else {
      alert("No file selected to submit!");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Sembunyikan pop-up tanpa mereset file
    if (verificationStatus === "fail") {
      // Reset file jika verifikasi gagal
      setSelectedFile(null);
      setPreviewURL(null);
    }
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
            {verificationStatus === "success" ? (
              <>
                <h3>Your File Has Been Verified!</h3>
                <p>Your file has been successfully processed and verified.</p>
                <a
                  href={previewURL}
                  download={selectedFile.name}
                  className="download-btn"
                >
                  <i className="fas fa-download"></i> Download File
                </a>
              </>
            ) : (
              <>
                <h3>Verification Failed!</h3>
                <p>Your file failed to verify.</p>
              </>
            )}
            <button className="close-btn" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Qrcode;