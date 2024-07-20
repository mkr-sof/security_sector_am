import React from 'react';
import './featutes.css';
import {Feature, Wrapper} from "../../components";
import {useTranslation} from "react-i18next";

const Features = () => {
    const { t, i18n } = useTranslation();
    const featuresData = t('featuresData', { returnObjects: true })
        // console.log("featuresData: ", featuresData)
    // console.log("featuresData type: ", Array.isArray(featuresData));

    return (
        <Wrapper>
        <div className="security__features section__padding" id="services">
            <div className="security__features-heading">
                <h1 className="gradient__text">{t('features.title')}</h1>
                <p>{t('features.description')}</p>
            </div>
            <div className="security__features-container">
                {featuresData.map((item, index) => (
                    <Feature
                        title={item.title}
                        text={item.text}
                        key={index}
                    />
                ))}
            </div>
        </div>
        </Wrapper>
    );
};

export default Features;
