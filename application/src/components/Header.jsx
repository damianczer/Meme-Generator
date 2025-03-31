import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="logo">
                <p className="logo-text">Meme Generator</p>
            </div>
            <button
                className="menu-toggle"
                onClick={onMenuToggle}
                aria-label="Toggle Menu"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    );
};

export default Header;
