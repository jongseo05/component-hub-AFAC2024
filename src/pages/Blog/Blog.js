import React, { useState } from "react";
import "../Submit/Submit.css";
import Top_Navbar from '../Mainpage/Navbar/Top_Navbar';
import Drawer from '../Component/Drawer/Drawer';
import Preview from '../Submit/Preview/Preview';
import FileDownload from "./File_download/File_download";
import example_jpg from './example.jpg';
import "./Blog.css";
import "./File_download/LikeSection.css";

const Blog = () => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(6.98);

    const [favorited, setFavorited] = useState(false);
    const [favoriteCount, setFavoriteCount] = useState(2.45);

    const handleLikeClick = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 0.01 : likeCount + 0.01);
    };

    const handleFavoriteClick = () => {
        setFavorited(!favorited); // 상태 변경
        setFavoriteCount(favorited ? favoriteCount - 0.01 : favoriteCount + 0.01);
    };

    const exampleData = {
        title: "The Future of Renewable Energy: Innovations and Challenges Ahead",
        image: example_jpg,
        content: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        `,
        files: [
            { name: "style.css", url: "/uploads/style.css" },
            { name: "script.js", url: "/uploads/script.js" }
        ]
    };

    return (
        <>
            <Top_Navbar />
            <Drawer className="blog-drawer" />
            <div className="detail-page">
                <div className="image-section">
                    <img src={exampleData.image} alt="Post Thumbnail" className="main-image" />
                    <h1 className="image-title">{exampleData.title}</h1>
                </div>
                <div className="content-section">
                    <span className="Text_head">Description</span>
                    <p>{exampleData.content}</p>

                    <div className="divider"></div>

                    <span className="Text_head">Preview</span>
                    <div className="preview-section blog-preview">
                        <Preview/>
                    </div>

                    <div className="divider"></div>

                    <div className="file-download-section">
                        <span className="Text_head">Download</span>
                        <FileDownload files={exampleData.files}/>
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
