import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLaughSquint } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="logo">
                <h1 className="logo-text">
                    Meme <FontAwesomeIcon style={{ color: "#e3cb11" }} icon={faLaughSquint} /> Generator
                </h1>
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
