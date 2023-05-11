import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonDE from "../language/de/commonDE.json";
import commonEN from "../language/en/commonEN.json";

//TODO https://github.com/orzechowskid/i18next-react-postprocessor

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: import.meta.env.MODE !== "production",
        fallbackLng: "en",
        ns: ["common"],
        defaultNS: "common",
        returnObjects: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            de: {
                common: commonDE,
            },
            en: {
                common: commonEN,
            }
        }
    });

export default i18n;
