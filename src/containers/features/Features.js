import React from 'react';
import './featutes.css';
import {Feature, Wrapper} from "../../components";

const featuresData = [
    {
        title: 'Security Industry Insights',
        text: 'Our commitment to keeping you informed goes beyond routine updates. Dive into insightful content crafted to provide you with valuable knowledge about the evolving landscape of security. Whether you\'re interested in the latest advancements in surveillance technology, emerging threat landscapes, or industry-wide best practices, our Security Industry Insights are your go-to resource.'
    },
    {
        title: 'Home Security Bundle',
        text:'Protect your home with our Home Security Bundle, combining smart surveillance solutions, access control features, and a personalized security plan. Enjoy a special bundled price for a comprehensive home security setup.'
    },
    {
        title: 'Business Protection Package',
        text:'For businesses, our Business Protection Package offers a complete security solution. Receive a discounted rate on advanced security measures such as intruder detection systems, cybersecurity assessments, and emergency response planning.'
    },
    {
        title: 'Limited-Time Equipment Upgrade',
        text:'Upgrade your security equipment with our limited-time offer! Get exclusive discounts on the latest surveillance cameras, access control systems, and other cutting-edge security technologies.'
    },
]

const Features = () => {
    return (
        <Wrapper>
        <div className="gpt3__features section__padding" id="services">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">Explore Exclusive Updates from Security Sector</h1>
                <p>Request to Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
        </Wrapper>
    );
};

export default Features;
