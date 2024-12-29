import React, { useState } from 'react';
import './ActionButtons.css';

const ActionButtons = () => {
    const [isPublished, setIsPublished] = useState(false);

    const handlePublishToggle = () => {
        setIsPublished(!isPublished);
    };

    return (
        <div className="action-buttons-container">
            <div className="publish-toggle">
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isPublished}
                        onChange={handlePublishToggle}
                    />
                    <span className="slider"></span>
                </label>
                <span className="publish-label">{isPublished ? 'Published' : 'Publish'}</span>
            </div>
            <button className="preview-button">Preview</button>
            <button className="save-button">Save changes</button>
        </div>
    );
};

export default ActionButtons;
