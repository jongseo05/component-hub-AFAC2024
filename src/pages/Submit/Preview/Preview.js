import React, { useEffect, useRef } from 'react';

const PreviewWithCodeSandbox = ({ jsContent, cssContent }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            try {
                // iframe 내부 HTML 생성
                const iframeHtml = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>${cssContent || ''}</style>
                    </head>
                    <body>
                        <div id="root"></div>
                        <script>
                            try {
                                ${jsContent || ''}
                            } catch (error) {
                                document.body.innerHTML = '<pre style="color: red;">' + error.toString() + '</pre>';
                            }
                        </script>
                    </body>
                    </html>
                `;

                // iframe에 동적 삽입
                const iframeDoc = iframeRef.current.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(iframeHtml);
                iframeDoc.close();
            } catch (error) {
                console.error('Error injecting code into iframe:', error);
            }
        }
    }, [jsContent, cssContent]);

    return (
        <iframe
            ref={iframeRef}
            style={{ width: '100%', height: '500px', border: 'none' }}
            title="JavaScript and CSS Preview"
            sandbox="allow-scripts"
        />
    );
};

export default PreviewWithCodeSandbox;
