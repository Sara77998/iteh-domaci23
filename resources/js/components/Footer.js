import React from 'react';
import Logo from './slike/Logo.png'
import "./css/Footer.css";

function Footer() {
    return (
        <div>
            <nav className="navbar fixed-bottom">
                <a class="navbar-brand">
                    <img id="logo" src={Logo}></img>
                    <p>FILMODROM, Copyright &copy; 2021</p>
                </a>
            </nav>
        </div>
    );
}

export default Footer;
