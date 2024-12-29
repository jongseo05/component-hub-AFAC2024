import React, { useState } from 'react';
import './Drawer.css';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Drawer = () => {
    const [openDropdown, setOpenDropdown] = useState({
        forms: false,
        components: false,
        utilities: false,
    });

    const toggleDropdown = (menu) => {
        setOpenDropdown((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    return (
        <div className="sidebar">

            <div className="sidebar-menu">
                {/* Forms */}
                <div className="menu-item" onClick={() => toggleDropdown('forms')}>
                    {openDropdown.forms ? <FaChevronDown className="menu-icon" /> : <FaChevronRight className="menu-icon" />}
                    <span>Forms</span>
                </div>
                <div className={`submenu ${openDropdown.forms ? 'open' : ''}`}>
                    <div className="submenu-item">Overview</div>
                    <div className="submenu-item">Form controls</div>
                    <div className="submenu-item">Form text</div>
                    <div className="submenu-item">Select</div>
                    <div className="submenu-item">Checks and radios</div>
                    <div className="submenu-item">Range</div>
                    <div className="submenu-item">Input Group</div>
                    <div className="submenu-item">Floating labels</div>
                    <div className="submenu-item">Layout</div>
                    <div className="submenu-item">Validation</div>
                </div>

                {/* Components */}
                <div className="menu-item" onClick={() => toggleDropdown('components')}>
                    {openDropdown.components ? <FaChevronDown className="menu-icon" /> : <FaChevronRight className="menu-icon" />}
                    <span>Components</span>
                </div>
                <div className={`submenu ${openDropdown.components ? 'open' : ''}`}>
                    <div className="submenu-item">Accordion</div>
                    <div className="submenu-item">Alerts</div>
                    <div className="submenu-item">Badges</div>
                    <div className="submenu-item">Breadcrumbs</div>
                    <div className="submenu-item">Button group</div>
                    <div className="submenu-item">Buttons</div>
                    <div className="submenu-item">Cards</div>
                    <div className="submenu-item">Carousels</div>
                    <div className="submenu-item">Close Button</div>
                    <div className="submenu-item">Dropdowns</div>
                    <div className="submenu-item">Figures</div>
                    <div className="submenu-item">Images</div>
                    <div className="submenu-item">List groups</div>
                    <div className="submenu-item">Modals</div>
                    <div className="submenu-item">Navbars</div>
                    <div className="submenu-item">Navs and tabs</div>
                    <div className="submenu-item">Offcanvas</div>
                    <div className="submenu-item">Overlay</div>
                    <div className="submenu-item">Pagination</div>
                    <div className="submenu-item">Placeholders</div>
                    <div className="submenu-item">Progress bars</div>
                    <div className="submenu-item">Spinners</div>
                    <div className="submenu-item">Tables</div>
                    <div className="submenu-item">Tabs</div>
                    <div className="submenu-item">Toasts</div>
                </div>

                {/* Utilities */}
                <div className="menu-item" onClick={() => toggleDropdown('utilities')}>
                    {openDropdown.utilities ? <FaChevronDown className="menu-icon" /> : <FaChevronRight className="menu-icon" />}
                    <span>Utilities</span>
                </div>
                <div className={`submenu ${openDropdown.utilities ? 'open' : ''}`}>
                    <div className="submenu-item">Transitions</div>
                    <div className="submenu-item">Ratios</div>
                    <div className="submenu-item">@restart/ui</div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
