import React from 'react';
// import './header.css';
import people from "../../assets/img/people.png";
import security from "../../assets/img/security.png";
import {useTranslation} from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    return (
        <div className="security__header section__margin" id="home">
            <div className="security__header-content">
                <h1 className="gradient__text">{t('header.welcomeMessage')}</h1>
                <p>{t('header.introText')}</p>

                {/*<div className="security__header-content__people">*/}
                {/*    <img src={people} alt="people"/>*/}
                {/*    <p>there are 1,600 happy clients following as</p>*/}
                {/*</div>*/}
            </div>
            <div className="security__header-image">
                <img src={security} alt="security"/>
            </div>
        </div>
    );
};

export default Header;
