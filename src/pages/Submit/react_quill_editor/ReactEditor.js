// reactEditor.js

'use client';

import { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import ReactModule from "./ReactModule.js";

const CustomQuillEditorView = {
    toolBar: {
        boxSizing: 'border-box',
        height: '40px',
        width: '100%',
        border: '1px solid #FFF',
        borderRadius: '10px 10px 0 0',
        backgroundColor: '#000',
        color: '#FFF',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        position: 'relative',
    },
    qlFormats: {
        display: 'inline-flex',
        gap: '10px',
        position: 'relative',
    },
    picker: {
        color: '#FFF',
        background: 'transparent',
    },
    pickerOptions: {
        background: '#000',
        color: '#FFF',
    },
    button: {
        color: '#FFF',
        background: 'transparent',
        '&:hover': {
            background: '#444',
        },
    },
    quillContent: {
        border: '1px solid #FFF',
        borderRadius: '0 0 10px 10px',
        backgroundColor: '#000',
        color: '#FFF',
    },
    qlContainer: {
        boxSizing: 'border-box',
        height: '250px',
        padding: '10px',
        color: '#FFF',
    },
    qlEditor: {
        color: '#FFF',
        fontSize: '14px',
        lineHeight: '1.6',
        '::-webkit-scrollbar': {
            width: '5px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-track': {
            background: '#444',
        },
    },
};

const ReactEditor = () => {
    const [content, setContent] = useState("");

    const formats = [
        "header", "size", "font",
        "bold", "italic", "underline", "strike", "blockquote",
        "list", "bullet", "indent", "link", "image",
        "color", "background", "align",
        "script", "code-block", "clean"
    ];

    const modules = useMemo(() => ({
        toolbar: {
            container: "#toolBar"
        },
    }), []);

    return (
        <div style={{ ...CustomQuillEditorView }}>
            <div id="toolBar" style={CustomQuillEditorView.toolBar}>
                <ReactModule />
            </div>
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                id="quillContent"
                value={content}
                onChange={setContent}
                style={{
                    ...CustomQuillEditorView.quillContent,
                    height: "300px",
                    width: "100%" // Component_Name_input과 동일한 너비 설정
                }}
            />

        </div>
    );
};

export default ReactEditor;
