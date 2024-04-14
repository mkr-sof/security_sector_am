import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/Security_logo.png';
import './navbar.css';

// import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../translation/LanguageSwitcher";

const Menu = ({ selectedLanguage }) => {
const { t } = useTranslation();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <>
        <p><Link to="/" onClick={() => scrollToSection('home')}>{t('navbar.home')}</Link></p>
        <p><Link to="/what" onClick={() => scrollToSection('what')}>{t('navbar.what')}</Link></p>
        <p><Link to="/services" onClick={() => scrollToSection('services')}>{t('navbar.services')}</Link></p>
        <p><Link to="/brand" onClick={() => scrollToSection('brand')}>{t('navbar.friends')}</Link></p>
        <p><Link to="/map" onClick={() => scrollToSection('map')}>{t('navbar.map')}</Link></p>
        <p><Link to="/contact" onClick={() => scrollToSection('contact')}>{t('navbar.contact')}</Link></p>
    </>
    );
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState("ENG");

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
    };

    return (
        <div className="security__navbar">
            <div className="security__navbar-links">
                <div className="security__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="security__navbar-links_container">
                    <Menu t = {t} />
                </div>
            </div>
            <LanguageSwitcher
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
            />
            {/*<div className="security__navbar-sign">*/}
            {/*    <button type="button" className="active">RUS</button>*/}
            {/*    <button type="button">ARM</button>*/}
            {/*    <button type="button">ENG</button>*/}
            {/*</div>*/}
            <div className="security__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="security__navbar-menu_container scale-up-center">
                        <div className="security__navbar-menu_container-links">
                            <Menu t = {t} />
                            <div className="security__navbar-menu_container-links-sign">
                                <LanguageSwitcher
                                    selectedLanguage={selectedLanguage}
                                    onLanguageChange={handleLanguageChange}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
