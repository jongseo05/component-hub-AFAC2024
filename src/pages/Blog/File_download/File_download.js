import React from "react";
import './File_download.css';

const FileDownload = () => {
    // JS 파일 다운로드 함수
    const handleJsDownload = () => {
        const link = document.createElement('a');
        link.href = './file_upload.js'; // JS 파일 경로
        link.download = 'file_upload.js'; // 다운로드 파일명
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // CSS 파일 다운로드 함수
    const handleCssDownload = () => {
        const link = document.createElement('a');
        link.href = './file_upload.css'; // CSS 파일 경로
        link.download = 'file_upload.css'; // 다운로드 파일명
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="download-buttons">
            {/* JS 다운로드 버튼 */}
            <button className="download-button js-download" onClick={handleJsDownload}>
                <i className="fas fa-download"></i> Download JS
            </button>

            {/* CSS 다운로드 버튼 */}
            <button className="download-button css-download" onClick={handleCssDownload}>
                <i className="fas fa-download"></i> Download CSS
            </button>
        </div>
    );
};

export default FileDownload;
