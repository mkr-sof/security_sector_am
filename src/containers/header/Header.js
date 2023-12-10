import React from 'react';
import './header.css';
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import security from "../../assets/security.png";

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Welcome to the Security Sector - Where Your Security is Our
                    Priority</h1>
                <p>At the Security Section, you're not just a client; you're a valued member of our security family.
                    Explore our range of services designed to meet your specific requirements and discover the
                    difference that personalized care can make.</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>there are 1,600 happy clients following as</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={security} alt="security"/>
            </div>
        </div>
    );
};

export default Header;
