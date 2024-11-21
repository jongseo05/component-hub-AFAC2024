import React, { useState, useEffect } from 'react';
import * as Babel from '@babel/standalone';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import './file_upload.css';

const DragDropUploader = () => {
    // State variables to manage files and their contents
    const [jsxFile, setJsxFile] = useState(null);
    const [cssFile, setCssFile] = useState(null);
    const [jsxContent, setJsxContent] = useState('');
    const [cssContent, setCssContent] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    // Function to read file content
    const handleFileRead = (file, setContent) => {
        const reader = new FileReader();
        reader.onload = () => {
            setContent(reader.result);
        };
        reader.readAsText(file);
    };

    // Function to handle selected files
    const handleFiles = (files) => {
        Array.from(files).forEach((file) => {
            if (file.name.endsWith('.jsx')) {
                setJsxFile(file);
                handleFileRead(file, setJsxContent);
            } else if (file.name.endsWith('.css')) {
                setCssFile(file);
                handleFileRead(file, setCssContent);
            } else {
                alert('Only .jsx and .css files are supported.');
            }
        });
    };

    // Event handlers for drag and drop functionality
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
            handleFiles(event.dataTransfer.files);
            event.dataTransfer.clearData();
        }
    };

    // Event handler for file input change
    const handleInputChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            handleFiles(event.target.files);
        }
    };

    // Function to upload files to the server
    const uploadFiles = async () => {
        const formData = new FormData();
        if (jsxFile) formData.append('jsxFile', jsxFile);
        if (cssFile) formData.append('cssFile', cssFile);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Files uploaded successfully:', response.data);
            setUploadComplete(true);
            setUploadError(null);
        } catch (error) {
            console.error('Error uploading files:', error);
            setUploadError('File upload failed. Please try again.');
        }
    };

    // Effect to trigger file upload when both files are selected
    useEffect(() => {
        if (jsxFile && cssFile) {
            uploadFiles();
        }
    }, [jsxFile, cssFile]);

    // Effect to apply CSS content to the document head
    useEffect(() => {
        if (cssContent) {
            const style = document.createElement('style');
            style.innerHTML = cssContent;
            document.head.appendChild(style);

            return () => {
                document.head.removeChild(style);
            };
        }
    }, [cssContent]);

    // Function to render the JSX component
    const renderComponent = () => {
        try {
            const transformedCode = Babel.transform(jsxContent, { presets: ['react'] }).code;
            const Component = eval(transformedCode);
            return <Component />;
        } catch (error) {
            console.error('Error rendering component:', error);
            return <p>Error rendering the component.</p>;
        }
    };

    return (
        <div>
            {!uploadComplete ? (
                <div>
                    <input
                        type="file"
                        multiple
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                        id="fileInput"
                    />
                    <label
                        htmlFor="fileInput"
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
                    <p>Files uploaded successfully!</p>
                </div>
            )}
            {uploadError && <p className="error-message">{uploadError}</p>}
            <p>{jsxFile && `Uploaded JSX: ${jsxFile.name}`}</p>
            <p>{cssFile && `Uploaded CSS: ${cssFile.name}`}</p>
            {jsxFile && cssFile ? (
                <div>
                    <h3>Preview:</h3>
                    {renderComponent()}
                </div>
            ) : (
                <p>Please upload both JSX and CSS files to preview the component.</p>
            )}
        </div>
    );
};

export default DragDropUploader;