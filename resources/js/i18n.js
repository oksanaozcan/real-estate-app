import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import Cookies from 'js-cookie';

const storedLang = Cookies.get('lang') || 'tr';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: storedLang,  // Default language
    fallbackLng: "en",  // Fallback language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",  // Path for loading translations
    },
  });

export default i18n;
