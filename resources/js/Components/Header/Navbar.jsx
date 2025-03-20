import { useState } from "react";
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import ThemeToggle from '@/Components/Header/ThemeToggle';
import { Link } from '@inertiajs/react';
import SearchDrawer from '@/Components/Header/SearchDrawer';
import { useTranslation } from 'react-i18next';

export default function Navbar({ auth }) {
    const { t } = useTranslation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-end flex-1 -mx-3">
                <button
                    className="outline-none nav-link"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    {t('search')}
                </button>
                <Link href={route('relocate')} className="nav-link">{t('relocate')}</Link>
                <Link href={route('about')} className="nav-link">{t('about')}</Link>
                {auth.user ? (
                    <Link href={route('dashboard')} className="nav-link">{t('dashboard')}</Link>
                ) : (
                    <>
                        <Link href={route('login')} className="nav-link">{t('log_in')}</Link>
                        <Link href={route('register')} className="nav-link">{t('register')}</Link>
                    </>
                )}
                <div className='nav-link'><LanguageSwitcher /></div>
                <div className='nav-link'><ThemeToggle /></div>
            </nav>
            <SearchDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </>
    );
}
