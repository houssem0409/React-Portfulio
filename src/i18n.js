import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation";
import fr from "./locales/fr/transalation";
import ar from "./locales/ar/translation";
import al from "./locales/al/translation";
import nb from "./locales/nb/translation";

// Function to get the language from the Redux store

let valLanguage = localStorage?.getItem("deviceLanguage");
// Get the initial language

// Initialize i18n with the initial language
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", // Set a default fallback language
    lng: Boolean(valLanguage) ? valLanguage : "en", // Set the initial language from the Redux store

    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      ar: {
        translation: ar,
      },
      al: {
        translation: al,
      },
      nb: {
        translation: nb,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
