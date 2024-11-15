import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Mainpage/Homepage';
import LoginPage from './pages/Log_in/Log_in';
import SubmitPage from './pages/Submit/Submit';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<LoginPage/>} />
                <Route path="/Submit" element={<SubmitPage/>}/>

            </Routes>
        </Router>
    );
}

export default App;
