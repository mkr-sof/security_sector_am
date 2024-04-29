import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ selectedLanguage, onLanguageChange }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = async (lng) => {
        await i18n.changeLanguage(lng);
        onLanguageChange(selectedLanguage);
    };

    console.log(i18n.language)

    return (
        <div className="security__navbar-sign">
            {['RUS', 'ARM', 'ENG'].map((lng) => (
                <button
                    key={lng}
                    type="button"
                    className={lng === i18n.language ? 'active' : ''} // Set active class based on current language
                    onClick={() => changeLanguage(lng)}
                >
                    {t(`${lng}`)}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;