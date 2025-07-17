import React from 'react';
// import './services.css';
import {Feature, Wrapper} from "../../components";
import {useTranslation} from "react-i18next";

const Services = () => {
    const { t, i18n } = useTranslation();
    const servicesData = t('servicesData', { returnObjects: true })


    return (
        <Wrapper>
        <div className="security__features section__margin" id="services">
            <div className="security__services-heading">
                <h1 className="gradient__text">{t('services.title')}</h1>
                <p>{t('services.description')}</p>
            </div>
            <div className="security__services-container">
                {servicesData.map((item, index) => (
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

export default Services;
