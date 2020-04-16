import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";

const allowedLanguages = ["en", "fi"];

const defaultLng = "en";
let lng = defaultLng;

const storageLanguage = localStorage.getItem("language");
if (storageLanguage && allowedLanguages.indexOf(storageLanguage) > -1) {
  lng = storageLanguage;
}

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    lng,
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/translations/{{lng}}.json",
      allowMultiLoading: true
    },
    react: {
      wait: true,
      useSuspense: true
    }
  });

export default i18n;
