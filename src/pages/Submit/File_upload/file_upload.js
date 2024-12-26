import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 아이콘
import './file_upload.css';

const DragDropUploader = ({ fileType, setFileContent }) => {
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    const handleFileUpload = (uploadedFile) => {
        if (!uploadedFile.name.endsWith(`.${fileType}`)) {
            alert(`Only ${fileType.toUpperCase()} files are supported.`);
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            setFileContent(event.target.result); // 파일 내용을 부모 컴포넌트로 전달
            setFile(uploadedFile);
            setUploadComplete(true); // 업로드 완료 상태 설정
        };
        reader.readAsText(uploadedFile);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(true); // 드래그 활성화
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false); // 드래그 비활성화
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            handleFileUpload(event.dataTransfer.files[0]); // 파일 처리
            event.dataTransfer.clearData();
        }
    };

    const handleInputChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            handleFileUpload(event.target.files[0]); // 파일 처리
        }
    };

    return (
        <div className="drag-drop-container-wrapper">
            {/* 업로드 완료 상태를 기반으로 조건부 렌더링 */}
            {!uploadComplete ? (
                <div
                    className={`drag-drop-container ${dragActive ? 'drag-active' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept={`.${fileType}`}
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                        id={`file-upload-${fileType}`}
                    />
                    <label htmlFor={`file-upload-${fileType}`}>
                        <i className="fas fa-file-upload"></i>
                        <p>Drag & Drop or click to upload a {fileType.toUpperCase()} file</p>
                    </label>
                </div>
            ) : (
                <div className="upload-success-container">
                    <i className="fas fa-check-circle"></i>
                    <p>{fileType.toUpperCase()} file uploaded: {file.name}</p>
                </div>
            )}
        </div>
    );
};

export default DragDropUploader;
