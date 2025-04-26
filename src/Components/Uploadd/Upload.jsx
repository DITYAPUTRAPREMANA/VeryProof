import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <p>Browse Files to upload</p>
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
          <button className="remove-btn" onClick={handleRemoveFile}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ) : (
        <div className="file-info">
          <i className="fas fa-file-alt file-icon"></i>
          <span>No selected file</span>
          <button className="remove-btn" disabled>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Upload;