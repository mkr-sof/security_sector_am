import React from 'react';
import './cta.css';

const CTA = () => {
    return (
        <>
            <div className="security__cta">
                <div className="security__cta-content">
                    <p>If You Already Know What You Want</p>
                    <h3>You Can Fill the Form and Choose Product from our Friends</h3>
                </div>
                <div className="security__cta-btn">
                    <button type="button">Get Started</button>
                </div>

            </div>
            <div className="security__contact-heading">
                <h1>If you haven't yet decided what you want, feel free to leave your contact information, and we will
                    be happy to provide consultation.</h1>
            </div>

            <div className="security__header-content__input">
                <input type="email" placeholder="Your Email Address"/>
                <button type="button">Get Started</button>
            </div>


        </>
    );
};

export default CTA;
