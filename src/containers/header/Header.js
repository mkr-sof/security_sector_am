import React from 'react';
import './header.css';
import people from "../../assets/people.png";
import security from "../../assets/security.png";
import getTranslation from "../../translation/translationLoader";

const Header = ({ language }) => {
    return (
        <div className="security__header section__padding" id="home">
            <div className="security__header-content">
                <h1 className="gradient__text">{getTranslation('welcomeMessage', language)}</h1>
                <p>{getTranslation('introText', language)}</p>

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
