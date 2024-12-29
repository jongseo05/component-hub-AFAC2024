import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Mainpage/Homepage';
import LoginPage from './pages/Log_in/Log_in';
import SubmitPage from './pages/Submit/Submit';
import Component from './pages/Component/Component';
import Blog from './pages/Blog/Blog';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<LoginPage/>} />
                <Route path="/Submit" element={<SubmitPage/>}/>
                <Route path="/Component" element={<Component/>}/>
                <Route path="/Blog" element={<Blog/>}/>
            </Routes>
        </Router>
    );
}

export default App;
