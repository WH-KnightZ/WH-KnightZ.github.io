import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from 'locales/en/translation.json';
import translationVI from 'locales/vi/translation.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      vi: { translation: translationVI },
    },
    lng: 'vi',
    fallbackLng: 'vi',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
