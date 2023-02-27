import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        //load: 'languageOnly',
        fallbackLng: false,
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // resources: {
        //     en: {
        //         translation: {
        //             title: '41241rrrrr'
        //         }
        //     },
        //     ru: {
        //         translation: {
        //             title: '412ffff'
        //         }
        //     }
        //}
        // react: {
        //     wait: true,
        // },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            //addPath: '/public/locales/add/{{lng}}/{{ns}}',

        },

    });


export default i18n;
