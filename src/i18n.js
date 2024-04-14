import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './translation/english/translation.json';
import translationRU from './translation/russian/translation.json';
import translationAM from './translation/armenian/translation.json';

const resources = {
    en:{
        translation: translationEN
    },
    ru:{
        translation: translationRU
    },
    am:{
        translation: translationAM
    }
}

i18n
    .use(Backend)
    .use(require(LanguageDetector))
    .use(initReactI18next)
    .init({
        rtl: true,
        debug: true,
        fallbackLng: 'en',
        resources,
        detection: {
            caches: ['cookie',]
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true,
            useSuspense: false,
        },
    }).then(() => {
    // Code to execute after i18n initialization is complete
    console.log('i18n initialization completed.');
})
    .catch(error => {
        // Handle initialization errors
        console.error('Error initializing i18n:', error);
    });
export default i18n;
