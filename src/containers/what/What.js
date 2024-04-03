import React from 'react';
import './what.css';
import {Feature, Wrapper} from "../../components";

const What = () => {

    const whatWeDoData = [
        {
            title: "Tourniquet Technology",
            text: "Experience the latest in emergency response with our innovative tourniquet solutions. Learn how our advanced technology ensures rapid and effective control in critical situations, enhancing the safety measures at your location."
        },
        {
            title: "Surveillance Cameras",
            text: "Unlock a new level of security with our state-of-the-art surveillance camera systems. Explore the benefits of high-resolution imagery, smart analytics, and real-time monitoring that empower you to protect what matters most."
        },
        {
            title: "Access Control Systems",
            text: "Take control of your security with our sophisticated access control systems. From biometric authentication to smart card readers, we provide customizable solutions to regulate and monitor access to your premises."
        },
        {
            title: "Smart Intrusion Detection",
            text: "Discover how our smart intrusion detection systems go beyond traditional methods. Utilizing advanced sensors and artificial intelligence, we offer proactive security measures that detect and respond to potential threats in real time."
        },
        {
            title: "Integration Solutions",
            text: "Experience seamless security integration with our solutions. Find out how we combine various security features into a cohesive system, providing you with a comprehensive and efficient security infrastructure."
        },
        // {
        //     title: "",
        //     text: ""
        // },

    ];

    return (
        <Wrapper>
            <div className="security__whatWeDo section__margin" id="what">
                <div className="security__whatWeDo-feature">
                    <Feature title="What We Are Doing" text="At the Security Sector, we take pride in offering cutting-edge security solutions designed to meet the unique needs of our clients. Discover the featured content below to learn more about the advanced security features we provide." />
                </div>
                <div className="security__whatWeDo-heading">
                    <h1 className="gradient__text">Explore Advanced Security Solutions with the Security Sector</h1>
                    <p>Explore Our Services</p>
                </div>
                <div className="security__whatWeDo-container">
                    {
                        whatWeDoData.map((item, index) => (
                            <Feature title={item.title} text={item.text} key={item.title + index} />
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    );
};

export default What;
