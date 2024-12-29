import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import example_img from './example.jpg';

const Card = () => {
    const navigate = useNavigate();

    const exampleData = {
        title: "Exploring the Cosmos",
        description: "A journey through space and time, exploring galaxies, stars, and the mysteries of the universe.",
        status: "Published",
        date: "December 29, 2024",
        authorImage: "https://via.placeholder.com/40",
        postImage: example_img,
        views: 120,
        comments: 45,
        shares: 30
    };

    const handleCardClick = () => {
        navigate('/Blog'); // '/Blog' 경로로 이동
    };

    return (
        <div className="card" onClick={handleCardClick}>
            <div className="Card_explain_section">
                <div className="card-header">
                    <span className={`status ${exampleData.status.toLowerCase()}`}>{exampleData.status}</span>
                    <span className="date">{exampleData.date}</span>
                </div>
                <h3 className="title">{exampleData.title}</h3>
                <p className="description">{exampleData.description}</p>
                <div className="card-footer">
                    <div className="metrics">
                        <span>👁 {exampleData.views}k</span>
                        <span>💬 {exampleData.comments}k</span>
                        <span>🔄 {exampleData.shares}k</span>
                    </div>
                </div>
            </div>

            <div className="Card_image_section">
                <img src={example_img} alt="Post Thumbnail" className="post-image" />
            </div>
        </div>
    );
};

export default Card;
