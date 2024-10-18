import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import uaLang from "./locales/ua/ua.json";

type Language = "ua" | "en";

const lng: Language = <Language>localStorage.getItem("lng") ?? "ua";

const resources = {
  ua: {
    translation: uaLang
  },
  en: {
    translation: enLang
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ua",
  lng: lng,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
