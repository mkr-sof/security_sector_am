import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/img/Security_logo.png';
// import './navbar.css';
import useMatchMedia from '../../hooks/useMatchMedia'


import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../translation/LanguageSwitcher";
import i18n from "../../i18n";

const Menu = ({ t }) => {
    useEffect(() => {
        console.log('Current language:', i18n.language);
    }, [i18n.language]);

    return (
    <>
        <p><NavLink to="/">{t('navbar.home')}</NavLink></p>
        <p><NavLink to="/what">{t('navbar.what')}</NavLink></p>
        <p><NavLink to="/services">{t('navbar.services')}</NavLink></p>
        <p><NavLink to="/brand">{t('navbar.friends')}</NavLink></p>
        <p><NavLink to="/map">{t('navbar.map')}</NavLink></p>
        <p><NavLink to="/contact">{t('navbar.contact')}</NavLink></p>
    </>
    );
}


const Navbar = () => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();

    const { t } = useTranslation();
        const handleLanguageChange = (lng) => {
        setSelectedLanguage(lng);
    };

    return (
        <div className="security__navbar">
            <div className="security__navbar-links">
                <div className="security__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                {/*{!isMobile || !isTablet || !isDesktop && (*/}
                    <div className="security__navbar-links_container">
                    <Menu t = {t} />
                </div>
                    {/*)}*/}
            </div>
            {/*{!isMobile && (*/}
            <LanguageSwitcher
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
            />
            {/*)}*/}
            <div className="security__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {/*{toggleMenu && (isMobile || isTablet || isDesktop) && (*/}
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
