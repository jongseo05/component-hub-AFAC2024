import React, {RefObject, useMemo, useState, useRef} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import Top_Navbar from "../Mainpage/Navbar/Top_Navbar";
import './Submit.css';

function Submit_page() {
    const [Component_name, setComponent_name] = useState("");
    const [Component_description, setComponent_description] = useState("");

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.placeholder = e.target.name === "componentName" ? "Enter the Component Name" : "Enter the description of Component Description";
        }
    };

    const handleFocus = (e) => {
        e.target.placeholder = "";
    };

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
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                        <div className = "Component_Descrpition">

                        </div>
                    </div>
                </div>

                <div className="Submit_box2">

                    <div className ="Category_section">
                        <div className ="Text_section_Category">
                            <span className ="Text_head">Code</span>
                            <span className ="Text_normal">Edit the code for live updates</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Submit_page;