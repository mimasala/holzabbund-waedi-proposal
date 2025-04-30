import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../locales/en/translation.json";
import German from "../locales/de/translation.json";

const langFromStorage = localStorage.getItem("user-language");
const parsedLang = langFromStorage ? JSON.parse(langFromStorage).state.language : "de";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: English,
    },
    de: {
      translation: German,
    },
  },
  lng: parsedLang,

});

export default i18next;
