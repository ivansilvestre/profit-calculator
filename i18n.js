import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./locales/EN.json";
import PT from "./locales/PT.json";
import { getUserLanguage } from "./src/utils/language";

const resources = {
  en: {
    translation: EN,
  },
  pt: {
    translation: PT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",

  react: {
    useSuspense: false,
  },

  interpolation: {
    escapeValue: false,
  },
});

// to change 'en-US' to 'en' for example
i18n.changeLanguage(
  getUserLanguage() ? getUserLanguage() : i18n.language?.substring(0, 2)
);

export default i18n;
