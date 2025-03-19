import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { usePage } from '@inertiajs/react';
import axios from "axios";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const user = usePage().props.auth.user;

  const [language, setLanguage] = useState();

  useEffect(() => {
    if (user) {
        setLanguage(user.preferred_language)
    } else {
        setLanguage(Cookies.get('lang') || 'tr');
    }

  }, []);

  const changeLanguage = (lang) => {
    if (user) {
        i18n.changeLanguage(lang);
        Cookies.set('lang', lang, { expires: 30 });
        axios.post('/user/language', { language: lang });
        window.location.reload();
    } else {
        i18n.changeLanguage(lang);
        Cookies.set('lang', lang, { expires: 30 });
        setLanguage(lang);
        window.location.reload();
    }
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
