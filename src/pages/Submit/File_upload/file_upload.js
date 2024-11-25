import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import './file_upload.css';

const DragDropUploader = ({ fileType }) => {
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    // Function to handle file selection
    const handleFile = async (selectedFile) => {
        if (!selectedFile.name.endsWith(fileType)) {
            alert(`Only ${fileType.toUpperCase()} files are supported.`);
            return;
        }

        setFile(selectedFile);
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post(`http://localhost:5000/upload/${fileType}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(`${fileType.toUpperCase()} file uploaded successfully:`, response.data);
            setUploadComplete(true);
            setUploadError(null);
        } catch (error) {
            console.error(`Error uploading ${fileType.toUpperCase()} file:`, error);
            setUploadError('File upload failed. Please try again.');
        }
    };

    // Drag-and-drop handlers
    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            handleFile(event.dataTransfer.files[0]);
            event.dataTransfer.clearData();
        }
    };

    // File input handler
    const handleInputChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            handleFile(event.target.files[0]);
        }
    };

    return (
        <div>
            {!uploadComplete ? (
                <div>
                    <input
                        type="file"
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                        id={`fileInput-${fileType}`}
                    />
                    <label
                        htmlFor={`fileInput-${fileType}`}
                        className={`drag-drop-container ${dragActive ? 'drag-active' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <i className="fas fa-plus"></i>
                    </label>
                </div>
            ) : (
                <div className="upload-success-container">
                    <i className="fas fa-check-circle"></i>
                    <p>{fileType.toUpperCase()} file uploaded successfully!</p>
                </div>
            )}
            {uploadError && <p className="error-message">{uploadError}</p>}
            <p>{file && `Uploaded ${fileType.toUpperCase()}: ${file.name}`}</p>
        </div>
    );
};

export default DragDropUploader;
