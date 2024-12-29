import React from 'react';
import './Card.css';

const Card = ({ title, description, status, date, authorImage, postImage, views, comments, shares }) => {
    // status가 없을 경우 기본값을 설정
    const cardStatus = status ? status.toLowerCase() : 'unknown';

    return (
        <div className="card">
            <div className="card-header">
                <span className={`status ${cardStatus}`}>{status || 'Unknown'}</span>
                <span className="date">{date}</span>
            </div>
            <img src={postImage} alt="Post Thumbnail" className="post-image" />
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <div className="card-footer">
                <img src={authorImage} alt="Author" className="author-image" />
                <div className="metrics">
                    <span>👁 {views}k</span>
                    <span>💬 {comments}k</span>
                    <span>🔄 {shares}k</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
