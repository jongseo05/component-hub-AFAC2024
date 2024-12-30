import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Mainpage/Homepage';
import LoginPage from './pages/Log_in/Log_in';
import SubmitPage from './pages/Submit/Submit';
import Component from './pages/Component/Component';
import Blog from './pages/Blog/Blog';

function App() {
    const [submittedData, setSubmittedData] = useState(null);

    const handlePublish = (data) => {
        setSubmittedData(data); // 데이터를 상태로 저장
        console.log("Submitted Data:", data); // 디버깅용
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route
                    path="/Submit"
                    element={<SubmitPage onPublish={handlePublish} />}
                />
                <Route
                    path="/Component"
                    element={<Component data={submittedData} />}
                />
                <Route
                    path="/Blog"
                    element={<Blog data={submittedData} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
