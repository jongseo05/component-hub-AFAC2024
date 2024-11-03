import {React,useEffect,useState} from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import MainLogo from './MainLogo/ShareComponent_Logo';
import Top_Navbar from "./Navbar/Top_Navbar";
import './Homepage.css';
import ShareComponent_Logo from "./MainLogo/ShareComponent_Logo";

function Homepage(){

    return(
        <div className="Homepage">

        <Top_Navbar/>
        <ShareComponent_Logo/>
            <Dashboard/>



        </div>
    )

}

export default Homepage;