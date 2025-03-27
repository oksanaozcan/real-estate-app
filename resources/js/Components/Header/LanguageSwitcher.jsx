import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { usePage, router } from '@inertiajs/react';
import axios from "axios";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const languages = {
    tr: { label: "Türkçe", flag: <img src="/flags/turkey.svg" alt="Turkish Flag" width="24" height="24" />},
    en: { label: "English", flag: <img src="/flags/great-britain.svg" alt="Great Britain Flag" width="24" height="24" />},
    ru: { label: "Русский", flag: <img src="/flags/russia.svg" alt="Russian Flag" width="24" height="24" />},
};

const LanguageSwitcher = () => {
    const user = usePage().props.auth?.user;
    const page = usePage();

    const [currentLang, setCurrentLang] = useState(Cookies.get('lang') || "tr");

    const changeLanguage = async (lang) => {
        setCurrentLang(lang);
        Cookies.set('lang', lang, { expires: 30 });

        if (user) {
            await axios.post('/user/language', { language: lang });
        } else {
            await axios.get(`/lang/${lang}`);
        }

        axios.defaults.headers.common['X-Locale'] = lang;
        router.visit(page.url, {
            only: ['properties', 'static_text'],
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <div className="language-switcher">
            <Select onValueChange={changeLanguage} value={currentLang}>
                <SelectTrigger className="w-[70px]">
                    <SelectValue>
                        {languages[currentLang].flag}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(languages).map(([key, { label, flag }]) => (
                        <SelectItem key={key} value={key}>
                            {flag}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSwitcher;
