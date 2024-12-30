import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ data }) => {
    const navigate = useNavigate();

    if (!data) {
        return <p>No data available. Submit a component first.</p>;
    }

    const { title, description, status, date, authorImage, postImage, views, comments, shares } = data;

    const handleCardClick = () => {
        navigate('/Blog', { state: { data } }); // Pass data to Blog via state
    };

    return (
        <div className="card" onClick={handleCardClick}>
            <div className="Card_explain_section">
                <div className="card-header">
                    <span className={`status ${status?.toLowerCase()}`}>{status || 'Unknown'}</span>
                    <span className="date">{date}</span>
                </div>
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <div className="card-footer">
                    <div className="metrics">
                        <span>👁 {views}k</span>
                        <span>💬 {comments}k</span>
                        <span>🔄 {shares}k</span>
                    </div>
                </div>
            </div>

            <div className="Card_image_section">
                <img src={postImage} alt="Post Thumbnail" className="post-image" />
            </div>
        </div>
    );
};

export default Card;
