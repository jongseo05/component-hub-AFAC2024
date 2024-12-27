import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 아이콘
import './ImageUploader.css';

const ImageUploader = ({ setImageContent }) => {
    const [image, setImage] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFileUpload = (uploadedFile) => {
        if (!uploadedFile.type.startsWith('image/')) {
            alert('Only image files are supported.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            console.log('Uploaded Image Content:', event.target.result); // 로그 출력
            setImageContent(event.target.result); // 이미지 URL을 부모 컴포넌트로 전달
            setImage(event.target.result); // 미리보기용 이미지 URL 설정
        };
        reader.readAsDataURL(uploadedFile);
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
            {!image ? (
                <div
                    className={`image_drag-drop-container ${dragActive ? 'drag-active' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                        id="image-upload"
                    />
                    <label htmlFor="image-upload">
                        <i className="fas fa-image"></i>
                        <p>Drag & Drop or click to upload an image</p>
                    </label>
                </div>
            ) : (
                <div className="upload-success-container">
                    <img src={image} alt="Uploaded Preview" className="uploaded-image" />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
