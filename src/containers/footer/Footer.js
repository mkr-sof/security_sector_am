import React from 'react';
// import './footer.css';

import logo from '../../assets/img/Security__.png'
import securityLogo from '../../assets/img/logo.svg'
import {Link} from "react-router-dom";

const Footer = () => {

    const footerLinks = [
        {
            title: 'Links',
            links: [
                { url: '/map', label: 'Were We in Armenia' },
                { url: '/contact', label: 'Contact' }
            ]
        },
        {
            title: 'Social Media',
            links: [
                { url: 'https://www.facebook.com', label: 'Facebook' },
                { url: 'https://www.linkedin.com', label: 'LinkedIn' }
            ]
        },
        {
            title: 'Fast Contact',
            links: [
                { url: 'tel:+37477548810', label: '+374 (77) 54 88 10' },
                { url: 'mailto:info@securitysector.am', label: 'info@securitysector.am' }
            ]
        }
    ];

    return (
        <div className="security__footer section__padding">
           <div className="security__footer-heading">
               <h1 className="gradient__text">Welcome Tomorrow's Innovations Today</h1>
           </div>

            <div className="security__footer-btn">
                <p>Request Early</p>
            </div>

            <div className="security__footer-links">
                <div className="security__footer-links_logo">
                    <img src={logo} alt='logo' />
                    {/*<p>some text here</p>*/}
                </div>
                {footerLinks.map((section, index) => (
                    <div className="security__footer-links_div" key={index}>
                    <h4>{section.title}</h4>
                    {section.links.map((link, idx) => (
                        <Link key={idx} to={link.url} className="security__footer-link">{link.label}</Link>
                    ))}
                    </div>
                ))}
                {/*<div className="security__footer-links_div">*/}
                {/*    <h4>Links</h4>*/}
                {/*    <p>Were We in Armenia</p>*/}
                {/*    <p>Contact</p>*/}
                {/*</div>*/}
                {/*<div className="security__footer-links_div">*/}
                {/*    <h4>Social Media</h4>*/}
                {/*    <p>Facebook</p>*/}
                {/*    <p>linkedin</p>*/}
                {/*</div>*/}
                {/*<div className="security__footer-links_div">*/}
                {/*    <h4>Fast Contact</h4>*/}
                {/*    <p>info@securitysector.am</p>*/}
                {/*    <p>+374 (77) 54 88 10</p>*/}
                {/*</div>*/}
            </div>
            <div className="security__footer-copyright">
                <p>© 2024 Security Sector. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
