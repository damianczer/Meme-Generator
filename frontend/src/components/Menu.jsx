import React, { useState, useEffect } from "react";
import '../styles/_menu.scss';
import userProfile from "../assets/user-profile.png";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faInfoCircle, faScrewdriverWrench, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ isOpen, onClose, onSelect }) => {
    const cookieName = 'dc_meme_generator_settings';
    const [isDarkMode, setIsDarkMode] = useState(() => Cookies.get(cookieName) === 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        Cookies.set(cookieName, isDarkMode ? 'dark' : 'light', { expires: 365 });
    }, [isDarkMode]);

    const handleSelect = (option) => {
        onSelect(option);
        onClose();
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <button className="menu-close" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="menu-profile">
                <img src={userProfile} alt="User Profile" className="profile-icon" />
                <p className="username">Anonymous</p>
            </div>
            <ul>
                <li onClick={() => handleSelect('Generator')}>
                    Generator
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="menu-icon" />
                </li>
                <li onClick={() => handleSelect('Gallery')}>
                    Gallery
                    <FontAwesomeIcon icon={faImage} className="menu-icon" />
                </li>
                <li onClick={() => handleSelect('About')}>
                    About
                    <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" />
                </li>
            </ul>
            <div className="dark-mode-toggle">
                <FontAwesomeIcon icon={faSun} className="toggle-icon" />
                <label className="switch">
                    <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                    <span className="slider"></span>
                </label>
                <FontAwesomeIcon icon={faMoon} className="toggle-icon" />
            </div>
        </nav>
    );
};

export default Menu;
