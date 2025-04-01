import React from "react";
import "../styles/_about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <p>
                Welcome to the Meme Generator! This application allows you to create, view, and share memes effortlessly.
            </p>
            <p>
                Developed by <b>DC & DG</b>, this project is designed to bring fun and creativity to your fingertips.
            </p>
            <p>
                Explore the generator, browse the gallery, and learn more about the project in this section.
            </p>
            <p className="cookie-consent">
                <FontAwesomeIcon icon={faCookieBite} className="cookie-icon" />
                By using this application, you agree to the use of cookies.
            </p>
            <div className="author-links">
                <div>
                    <p>Damian Czerwiński</p>
                    <a href="https://github.com/damianczer" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/daczerw" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                </div>
                <div>
                    <p>Dominik Grabowski</p>
                    <a href="https://github.com/grabovv" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/dominik-grabowski/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                </div>
            </div>
            <pre className="license-text">
                {`MIT License

Copyright (c) 2025 Damian Czerwiński & Dominik Grabowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
        </div>
    );
};

export default About;
