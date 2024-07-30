import React from 'react';
// import './what.css';
import {Feature, Wrapper} from "../../components";
import {useTranslation} from "react-i18next";

const What = () => {

    const { t, i18n } = useTranslation();
    const whatWeDoData = t('whatWeDoData', { returnObjects: true })


    return (
        <Wrapper>
            <div className="security__whatWeDo section__margin" id="what">
                <div className="security__whatWeDo-feature">
                    <Feature
                        title = {t('what.whatWeDo-feature.title')}
                        text = {t('what.whatWeDo-feature.text')} />
                </div>
                <div className="security__whatWeDo-heading">
                    <h1 className="gradient__text">{t('what.heading.title')}</h1>
                    <p>{t('what.heading.button-text')}</p>
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
