import React from "react";
import "../Submit/Submit.css";
import Top_Navbar from '../Mainpage/Navbar/Top_Navbar';
import Drawer from '../Component/Drawer/Drawer';
import Preview from '../Submit/Preview/Preview';
import example_jpg from './example.jpg';
import "./Blog.css";

const Blog = () => {
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

                    <span className = "Text_head">Preview</span>
                    <div className="preview-section blog-preview">
                        <Preview />
                    </div>

                    <div className="file-download-section">
                        <h2>Download Files</h2>
                        <ul className="file-list">
                            {exampleData.files.map((file, index) => (
                                <li key={index}>
                                    <a href={file.url} download className="file-link">
                                        {file.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
