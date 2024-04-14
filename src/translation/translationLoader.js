
const englishTranslations = require('./english/translation.json');
const russianTranslations = require('./russian/translation.json');

const getTranslation = (key, language) => {
    let translations = {};
    switch (language) {
        case 'english':
            translations = englishTranslations;
            break;
        case 'russian':
            translations = russianTranslations;
            break;
        default:
            translations = englishTranslations;
    }
    return translations[key] || key;
};

export default getTranslation;
