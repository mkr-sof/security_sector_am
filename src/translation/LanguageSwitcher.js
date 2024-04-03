import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ selectedLanguage, onLanguageChange }) => {
    const { t, i18n } = useTranslation(); // Get translation function and i18n instance

    const changeLanguage = async (lng) => {
        await i18n.changeLanguage(lng);
        onLanguageChange(lng);
    };
    console.log(i18n)

    return (
        <div className="security__navbar-sign">
            {['RUS', 'ARM', 'ENG'].map((lang) => (
                <button
                    key={lang}
                    type="button"
                    className={lang === i18n.language ? 'active' : ''} // Set active class based on current language
                    onClick={() => changeLanguage(lang)}
                >
                    {t(`${lang}`)}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;