import {React,useEffect,useState} from 'react';
import {Routes, Route, Link, useParams} from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // 컴포넌트 데이터 예시
    const components = [
        { image: 'img1.jpg', likes: 120, views: '2.4k' },
        { image: 'img2.jpg', likes: 150, views: '3.2k' },
        { image: 'img3.jpg', likes: 90, views: '1.8k' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentComponent = components[currentIndex];


    return(
        <div className="Dashboard_section">
            <div className="Dashboard_button_section">
                <Link to="/Dashboard" className="Dashboard_button">
                    Dashboard
                </Link>
            </div>

            <div className="Dashboard_img">
                <img src="/src/img/Twilight Sky Dreams_ Free iPhone Wallpaper in High Quality.jpg" alt="Popular_Component" className="Dashboard_img"/>
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


        </div>
    )
}

export default Dashboard