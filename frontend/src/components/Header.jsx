import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const Header = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-image" />
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
