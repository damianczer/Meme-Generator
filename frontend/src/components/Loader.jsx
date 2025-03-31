import React from "react";
import "../styles/_loader.scss";

const SuspenseLoader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <h1>Loading ..</h1>
        </div>
    );
};

export default SuspenseLoader;
