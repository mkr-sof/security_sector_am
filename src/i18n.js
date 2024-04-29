import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './translation/english/translation.json';
import translationRU from './translation/russian/translation.json';
import translationAM from './translation/armenian/translation.json';

const resources = {
    ENG:{
        translation: translationEN
    },
    RUS:{
        translation: translationRU
    },
    ARM:{
        translation: translationAM
    }
}
// const language = localStorage.getItem('language');
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources,
        // lng: language || 'en',
        detection: {
            caches: ['cookie', 'localStorage']
        },
           }).then(() => {
    // after i18n initialization is complete
    console.log('i18n initialization completed.');
})
    .catch(error => {
        // initialization errors
        console.error('Error initializing i18n:', error);
    });
export default i18n;
