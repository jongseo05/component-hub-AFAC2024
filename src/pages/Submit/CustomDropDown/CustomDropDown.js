import React, { useState } from "react";
import "./CustomDropDown.css";

function CustomDropdown({ options, onOptionSelect }) {
    const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
    const [searchQuery, setSearchQuery] = useState(""); // 검색 상태
    const [filteredOptions, setFilteredOptions] = useState(options); // 필터링된 옵션

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setFilteredOptions(
            options.filter((option) =>
                option.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    const handleOptionSelect = (option) => {
        onOptionSelect(option); // 선택된 값을 부모 컴포넌트로 전달
        setIsOpen(false); // 드롭다운 닫기
        setSearchQuery(""); // 검색어 초기화
        setFilteredOptions(options); // 옵션 초기화
    };

    return (
        <div className="custom-dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {isOpen ? "Close" : "Select Component Type"}
            </div>
            {isOpen && (
                <div className="dropdown-body">
                    <input
                        type="text"
                        className="dropdown-search"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <ul className="dropdown-options">
                        {filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CustomDropdown;
