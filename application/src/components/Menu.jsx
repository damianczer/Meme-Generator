import React from "react";
import '../styles/_menu.scss';
import userProfile from "../assets/user-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faInfoCircle, faScrewdriverWrench, faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ isOpen, onClose, onSelect }) => {
    const handleSelect = (option) => {
        onSelect(option);
        onClose();
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
        </nav>
    );
};

export default Menu;
