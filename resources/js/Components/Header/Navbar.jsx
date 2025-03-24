import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import ThemeToggle from '@/Components/Header/ThemeToggle';
import { Link } from '@inertiajs/react';
import SearchDrawer from '@/Components/Header/SearchDrawer';
import { useTranslation } from 'react-i18next';
import { usePage } from '@inertiajs/react'

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }) {
    const { t } = useTranslation();
    const { auth } = usePage().props

    return (
        <>
            <nav className="justify-end flex-1 hidden -mx-3 sm:flex">
                <button className="outline-none nav-link" onClick={() => setIsDrawerOpen(true)}>
                    {t('search')}
                </button>
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

