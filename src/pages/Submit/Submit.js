import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Top_Navbar from '../Mainpage/Navbar/Top_Navbar';
import './Submit.css';
import DragDropUploader from "./File_upload/file_upload";

function Submit_page() {
    const [Component_name, setComponent_name] = useState("");
    const [Component_description, setComponent_description] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [jsxCode, setJsxCode] = useState('<div>Hello World!</div>');
    const [cssCode, setCssCode] = useState('');



    return (
        <div>
            <Top_Navbar />
            <div className="Submit_container">
                <div className="Submit_box1">
                    <div className="Explain_section">
                        <span className="Text_head">Upload your component</span>
                        <span className="Text_normal">Description of your component, code</span>
                    </div>
                    <div className="Line"></div>
                    <div className="Component_explain_box">
                        <input
                            name="componentName"
                            onChange={(e) => setComponent_name(e.target.value)}
                            value={Component_name}
                            className="Component_Name_input"
                            placeholder="Enter the Component Name"
                        />
                        <ReactQuill
                            value={Component_description}
                            onChange={setComponent_description}
                            className="Component_Descrpition"
                        />
                    </div>
                </div>

                <div className="Submit_box2">
                    <div className="Category_section">
                        <div className="Text_section_Category">
                            <span className="Text_head">Code</span>
                            <span className="Text_normal">Edit the code for live updates</span>
                        </div>
                        <div className="Dropdown_section">
                            <span className="Text_head">Category</span>
                            <select
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="Dropdown"
                            >
                                <option value="" disabled>Component</option>
                                <option value="option1">옵션 1</option>
                                <option value="option2">옵션 2</option>
                                <option value="option3">옵션 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="Line"></div>
                    <div className="Code_section">

                        {/* JSX */}
                        <div className="Code_input">
                            <span className="Text_head">JSX</span>
                            <DragDropUploader/>
                        </div>

                        {/* JSX */}
                        <div className="Code_input">
                            <span className="Text_head">CSS</span>
                            <DragDropUploader/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Submit_page;