import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LaungageDetector from 'i18next-browser-languagedetector';
import uzLang from '../public/uz.json';
import ruLang from '../public/ru.json';
import enLang from '../public/en.json';

const laungages = localStorage.getItem('i18nextLng') || "en";

i18n
  .use(Backend)
  .use(LaungageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: laungages,
    debug: true,
    resources: {
      uz: { translation: uzLang },
      en: { translation: enLang },
      ru: { translation: ruLang }
    }
  });
export default i18n;