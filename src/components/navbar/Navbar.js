import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
    <>
        <p><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></p>
        <p><Link to="/what" onClick={() => scrollToSection('what')}>What we do</Link></p>
        <p><Link to="/services" onClick={() => scrollToSection('services')}>Our Services</Link></p>
        <p><Link to="/brand" onClick={() => scrollToSection('brand')}>Our Friends</Link></p>
        <p><Link to="/map" onClick={() => scrollToSection('')}>Map</Link></p>
        <p><Link to="/contact" onClick={() => scrollToSection('')}>Contact</Link></p>
    </>
    );
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
