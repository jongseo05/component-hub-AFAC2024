import Top_Navbar from '../Mainpage/Navbar/Top_Navbar';
import Drawer from './Drawer/Drawer';
import Card from './Card/Card.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Component.css';

function Component() {


    return (
        <>
            <Top_Navbar />
            <Drawer />
            <div className = "content">

                <div className ="card_container">
                    <Card/>




                </div>

            </div>
        </>
    );
}

export default Component;