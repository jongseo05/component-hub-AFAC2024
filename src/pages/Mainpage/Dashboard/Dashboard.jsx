import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import ex_img1 from '../../../assets/img/Dashboard_Example.png';

function Dashboard() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // 컴포넌트 데이터 예시
    const components = [
        { image: ex_img1, likes: 120, views: '2.4k' },
        { image: ex_img1, likes: 150, views: '3.2k' },
        { image: ex_img1, likes: 90, views: '1.8k' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentComponent = components[currentIndex];

    return (
        <div className="Dashboard_section">
            <div className="Dashboard_button_section">
                <Link to="/Dashboard" className="Dashboard_button">
                    <span className="Dashboard_button_text">Dashboard</span>
                </Link>
            </div>

            {/* Dynamic image from components */}
            <div className="Dashboard_img_section">
                <img src={currentComponent.image} alt="Popular Component" className="Dashboard_img"/>
            </div>

            <div className="Component_information_section">
                <div className="Dashboard_like_section">
                    <div className="Text_box">
                        <span className="Text">Like</span>
                    </div>
                    <div className="Like_num_layout">
                        <span className="Like_num_typography">Ξ {currentComponent.likes} likes</span>
                    </div>
                </div>

                <div className="Dashboard_view_section">
                    <div className="Text_box">
                        <span className="Text">View</span>
                    </div>
                    <div className="View_num_layout">
                        <span className="View_num_typography">Ξ {currentComponent.views}</span>
                    </div>
                </div>

            </div>
            <div className="Dashboard_button_section">
                <Link to="/Dashboard" className="Dashboard_button">
                    <span className="Dashboard_button_text">Link to component</span>
                </Link>
            </div>

        </div>
    );
}

export default Dashboard;
