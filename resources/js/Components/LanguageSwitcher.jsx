import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang); 
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')} className="lang-btn">
        🇺🇸 English
      </button>
      <button onClick={() => changeLanguage('tr')} className="lang-btn">
        🇹🇷 Türkçe
      </button>
      <button onClick={() => changeLanguage('ru')} className="lang-btn">
        Ru Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;
