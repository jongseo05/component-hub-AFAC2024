import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Top_Navbar from '../Mainpage/Navbar/Top_Navbar';
import './Submit.css';
import DragDropUploader from "./File_upload/file_upload";
import PreviewWithCodeSandbox from './Preview/Preview'; // Preview 컴포넌트 추가
import ReactEditor from "./react_quill_editor/ReactEditor";

function Submit_page() {
    const [Component_name, setComponent_name] = useState("");
    const [Component_description, setComponent_description] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [jsCode, setJsContent] = useState(`
    document.getElementById('root').innerHTML = '<h1>Hello World!</h1>';
`);

    const [cssCode, setCssContent] = useState('');

    useEffect(() => {
        console.log("JS Content Updated:", jsCode); // JS 코드가 변경될 때 출력
    }, [jsCode]);

    useEffect(() => {
        console.log("CSS Content Updated:", cssCode); // CSS 코드가 변경될 때 출력
    }, [cssCode]);


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
                        <span className="Text_normal">Name</span>
                        <input
                            name="componentName"
                            onChange={(e) => setComponent_name(e.target.value)} // Component_name 업데이트
                            value={Component_name} // Component_name 상태 참조
                            className="Component_Name_input"
                            placeholder="Enter the Component Name"
                        />
                        <span className="Text_normal">Description</span>
                        <input
                            name="Description"
                            onChange={(e) => setComponent_description(e.target.value)} // Component_description 업데이트
                            value={Component_description} // Component_description 상태 참조
                            className="Component_Descrpition"
                            placeholder="Enter the description of the component"
                        />
                        <div className="Editor_section">
                            <span className="Text_normal">Content</span>
                        <ReactEditor/>
                        </div>


                    </div>
                </div>

                <div className="Submit_box2">
                    <div className="Category_section">
                        <div className="Text_section_Category">
                            <span className="Text_head">Code</span>
                            <span className="Text_normal">Upload your component!</span>
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
                        {/* JS */}
                        <div className="Code_input">
                            <span className="Text_head">JS</span>
                            <DragDropUploader fileType="js" setFileContent={setJsContent} />
                        </div>
                        {/* CSS */}
                        <div className="Code_input">
                            <span className="Text_head">CSS</span>
                            <DragDropUploader fileType="css" setFileContent={setCssContent} />
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="Preview_section">
                        <div className="Text_section_Category">
                            <span className="Text_head">Live-Preview</span>
                            <span className="Text_normal">See preview of your component</span>
                        </div>
                        <PreviewWithCodeSandbox jsContent={jsCode} cssContent={cssCode} />
                    </div>

                </div>

                <div className="Submit_box3">

                    <div className = "Explain_section">
                        <span className="Text_head">Properties</span>
                        <span className="Text_normal">Upload cover image / cover description </span>
                    </div>
                    <div className="Line"></div>

                    <div className="Cover_image_section">
                    <span className = "Text_normal">Cover Image</span>
                    </div>






                </div>


            </div>
        </div>
    );
}

export default Submit_page;
