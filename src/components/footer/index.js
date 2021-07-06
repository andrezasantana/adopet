import React from 'react';
import './style.css';
import Logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={Logo} alt="logo" ></img>
            <p className="copyright">Copyright© 2021</p>
        </div>
    )
}

export default Footer