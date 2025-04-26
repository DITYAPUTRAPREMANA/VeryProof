import React, { useState } from "react";

const Verify = () => {
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
    <div style={{height: '100vh', width: '1980px'}} className="bg-gradient-to-br from-[#334257] to-[#6F8FBD] overflow-y-auto flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-[#5D789F]"
          >
            <div className="text-center">
              <i className="fas fa-cloud-upload-alt text-[#5D789F] text-3xl mb-2"></i>
              <p className="text-gray-600">Browse File to upload</p>
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {selectedFile ? (
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-4">
            <div className="flex items-center">
              <i className="fas fa-file-alt text-gray-500 text-xl mr-2"></i>
              <span className="text-gray-700">{selectedFile.name}</span>
            </div>
            <button
              type="button"
              className="text-red-500 hover:text-red-700"
              onClick={handleRemoveFile}
            >
              <i className="fas fa-trash"></i> Remove
            </button>
          </div>
        ) : (
          <div className="text-gray-500 text-center mb-4">
            <i className="fas fa-file-alt text-xl"></i>
            <p>No file selected</p>
          </div>
        )}

        {/* Preview Section */}
        {previewURL && (
          <div className="mb-4">
            <p className="text-gray-600 mb-2">File Preview:</p>
            <iframe
              src={previewURL}
              title="File Preview"
              className="w-full h-48 border border-gray-300 rounded-lg"
            ></iframe>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#5D789F] text-white px-4 py-2 rounded-lg hover:bg-[#6B8ABF] transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Animasi Proses */}
      {isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="loader mb-4"></div>
            <p className="text-gray-700">Processing your file...</p>
          </div>
        </div>
      )}

      {/* Pop-up Verifikasi */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {verificationStatus === "success" ? (
              <>
                <h3 className="text-lg font-semibold text-[#5D789F] mb-2">
                  Your Certificate Valid!
                </h3>
                <p className="text-gray-600 mb-4">
                your certificate is proven valid
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-red-500 mb-2">
                  Your Certificate Invalid!
                </h3>
                <p className="text-gray-600 mb-4">
                your certificate is not proven valid
                </p>
              </>
            )}
            <button
              className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verify;