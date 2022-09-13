import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'
function NotFound() {
    return (
        <div className="notFoundContainer">
            <Link className="backButton" to='/'>Return To Home</Link>
        </div>
    )
}

export default NotFound