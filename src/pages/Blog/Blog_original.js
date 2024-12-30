import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Submit/Submit.css";
import Top_Navbar from '../Mainpage/Navbar/Top_Navbar';
import Drawer from '../Component/Drawer/Drawer';
import FileDownload from "./File_download/File_download";
import "./Blog.css";
import "./File_download/LikeSection.css";

const Blog = () => {
    const location = useLocation();
    const data = location.state?.data || {};

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(6.98);

    const [favorited, setFavorited] = useState(false);
    const [favoriteCount, setFavoriteCount] = useState(2.45);

    const handleLikeClick = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 0.01 : likeCount + 0.01);
    };

    const handleFavoriteClick = () => {
        setFavorited(!favorited);
        setFavoriteCount(favorited ? favoriteCount - 0.01 : favoriteCount + 0.01);
    };

    const handleDownload = (fileContent, fileName) => {
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    };

    if (!data.name) {
        return <p>No blog data available. Submit a component first.</p>;
    }

    return (
        <>
            <Top_Navbar />
            <Drawer className="blog-drawer" />
            <div className="detail-page">
                <div className="image-section">
                    <img src={data.coverImage} alt="Post Thumbnail" className="main-image" />
                    <h1 className="image-title">{data.name}</h1>
                </div>
                <div className="content-section">
                    <span className="Text_head">Description</span>
                    <p>{data.description}</p>

                    <div className="divider"></div>

                    <span className="Text_head">Content</span>
                    <div className="content-detail">{data.content}</div>

                    <div className="divider"></div>

                    <div className="file-download-section">
                        <span className="Text_head">Download</span>
                        <button onClick={() => handleDownload(data.content, 'component.js')}>
                            Download JS
                        </button>
                        <button onClick={() => handleDownload(data.css, 'component.css')}>
                            Download CSS
                        </button>
                    </div>

                    <div className="divider"></div>

                    <div className="likes-section">
                        <i
                            className={`fas fa-heart like-icon ${liked ? "liked" : ""}`}
                            onClick={handleLikeClick}
                        ></i>
                        <span className="like-count">{likeCount.toFixed(2)}k</span>

                        <div className="favorites-section">
                            <i
                                className={`fas fa-star favorite-icon ${favorited ? "favorited" : ""}`}
                                onClick={handleFavoriteClick}
                            ></i>
                            <span className="favorite-count">{favoriteCount.toFixed(2)}k</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
