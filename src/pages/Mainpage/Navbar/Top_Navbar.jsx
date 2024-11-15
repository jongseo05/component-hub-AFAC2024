import {React, useEffect, useState} from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom';
import './Top_Navbar.css';
import AIIALogo from './AIIA_Logo.png';

function Top_Navbar() {

    let links = ['Home','Component','Submit'];

    return (
        <div className="Navbar">

            <img src={AIIALogo} className="Logo_img"/>

            <div className="Nav_section">
                <div className="Links">
                    <div className="Link_section_Home">
                        <Link to="/" className="no_underline">
                            <nav className="Link_style">
                                Home
                            </nav>
                        </Link>
                    </div>
                    <div className="Link_section_Component">
                        <Link to="/Component" className="no_underline">
                            <nav className="Link_style">
                                Component
                            </nav>
                        </Link>
                    </div>
                    <div className="Link_section_Submit">
                        <Link to="/Submit" className="no_underline">
                            <nav className="Link_style">
                                Submit
                            </nav>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="Action_section">
                <div className="Search">
                    <span className="Search_text">
                        Search...
                    </span>
                </div>

                <div className="Sign_section">
                    <Link to="/signin" className="Sign_box"> {/* 사각형 전체를 Link로 변경 */}
                        <span className="Sign_style">Sign in</span>
                    </Link>
                    <Link to="/signup" className="Sign_box">
                        <span className="Sign_style">Sign up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Top_Navbar;

