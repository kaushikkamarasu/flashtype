import React from "react";
import thunderlogo from './../../assets/thunderlogo.png';
import './Nav.css';
const Nav = () => {
    return (
        <div className="nav-container" >
            <div className="nav-left">
                <img className="thunder-logo" src={thunderlogo} alt="flash-logo"></img>
                <p className="thunder-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a
                    className="gh-link"
                    target="_blank"
                    href="https://github.com/kaushikkamarasu">
                    GitHub
                </a>

            </div>
        </div>

    );
}

export default Nav;

