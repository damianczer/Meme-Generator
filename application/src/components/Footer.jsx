import React from "react";
import '../styles/_footer.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p> Copyright &copy; {currentYear} DC & DG - All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
