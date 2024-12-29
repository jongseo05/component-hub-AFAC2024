import React, { useState } from 'react';
import './TagsInput.css';
import { FaTag } from 'react-icons/fa'; // 태그 아이콘 사용

const TagsInput = ({ predefinedTags, onTagsChange }) => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(predefinedTags);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleAddTag = () => {
        if (inputValue.trim() && !tags.includes(inputValue.trim())) {
            const newTags = [...tags, inputValue.trim()];
            setTags(newTags);
            onTagsChange(newTags); // 부모 컴포넌트로 전달
        }
        setInputValue('');
        setShowDropdown(false); // 태그 추가 시 드롭다운 숨기기
    };

    const handleRemoveTag = (tagToRemove) => {
        const newTags = tags.filter(tag => tag !== tagToRemove);
        setTags(newTags);
        onTagsChange(newTags);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // 필터링된 옵션 업데이트
        setFilteredOptions(predefinedTags.filter(tag =>
            tag.toLowerCase().includes(value.toLowerCase())
        ));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag();
        }
    };

    const handleInputFocus = () => {
        setShowDropdown(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => setShowDropdown(false), 200); // 드롭다운 클릭 지원을 위해 약간의 지연 추가
    };

    return (
        <div className="tags-input-container">
            <div className="tags-list">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        <FaTag className="tag-icon" />
                        {tag}
                        <button onClick={() => handleRemoveTag(tag)}>&times;</button>
                    </span>
                ))}
            </div>
            <div className="input-wrapper">
                <FaTag className="input-tag-icon" />
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="태그를 입력하세요"
                />
                {showDropdown && (
                    <div className="autocomplete-options">
                        {filteredOptions.map((option, index) => (
                            <div
                                key={index}
                                className="autocomplete-item"
                                onClick={() => {
                                    setInputValue(option);
                                    handleAddTag();
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TagsInput;
