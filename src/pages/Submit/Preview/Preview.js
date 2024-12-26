import React, { useEffect, useRef } from 'react';
import './Preview.css';

const PreviewWithCodeSandbox = ({ jsContent, cssContent }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            const iframeHtml = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <style>
                        body {
                            margin: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            box-sizing: border-box;
                        }
                        ${cssContent || ''}
                    </style>
                </head>
                <body>
                    <div id="root"></div>
                    <script>
                        try {
                            ${jsContent || ''}
                        } catch (error) {
                            document.body.innerHTML = '<pre style="color: red; font-size: 16px;">' + error.toString() + '</pre>';
                        }
                    </script>
                </body>
                </html>
            `;
            iframeRef.current.srcdoc = iframeHtml;
        }
    }, [jsContent, cssContent]);

    return (
        <div className="preview-wrapper">
            <iframe
                ref={iframeRef}
                className="preview-iframe"
                title="Component Preview"
                sandbox="allow-scripts"
            />
        </div>
    );
};

export default PreviewWithCodeSandbox;
