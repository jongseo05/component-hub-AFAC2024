import {React,useEffect,useState} from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom';
import './Log_in.css';
import AIIALOGO from './AIIA_Logo.png'

function Log_in(){

    return(

        <div className="Log_in">
            <div className="Log_in_Container">

                    <img src={AIIALOGO} className="Log_in_Logo"/>

                <div className = "Log_in_box">
                    <div className="ID_box">
                    <span className="ID_text">Username or Email</span>
                        <div className = "ID_enterbox">

                        </div>
                    </div>
                    <div className="ID_box">
                        <span className="ID_text">Password</span>
                        <div className = "ID_enterbox">

                        </div>
                    </div>
                </div>

                <button className = "Log_in_Button" onClick={()=>{}}>
                    <span className="Text_button">Sign in</span>
                </button>

            </div>

            <div className = "Sign_up_box" onClick={()=>{}}>
                <span className="Sign_up_text1">New to here?</span>
            </div>
        </div>

    )}

export default Log_in;