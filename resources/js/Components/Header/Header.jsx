import { useState } from "react";
import ApplicationLogo from '@/Components/Header/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Divide as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import { usePage } from '@inertiajs/react'
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import ThemeToggle from '@/Components/Header/ThemeToggle';
import SearchSheet from './SearchSheet';
import {
    Sheet,
    SheetTrigger,
} from "@/Components/ui/sheet"

export default function Header({ }) {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation();
    const { auth } = usePage().props

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <header className="grid items-center grid-cols-2 gap-2 py-10 lg:grid-cols-1">
                <div className="flex justify-start lg:justify-center">
                    <Link href={route('home')}>
                        <ApplicationLogo className="h-12 w-auto text-white lg:h-16 lg:text-[#2075ff] fill-current" />
                    </Link>
                </div>

                <div className="justify-end hidden space-x-8 sm:flex sm:-my-px">
                    <nav className="justify-end flex-1 hidden -mx-3 sm:flex">
                        <SheetTrigger className="nav-link">
                            {t('search')}
                        </SheetTrigger>

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
                </div>

                <div className="flex justify-end sm:hidden">
                    <SheetTrigger>
                        <Hamburger toggled={isOpen} toggle={setIsOpen}/>
                    </SheetTrigger>
                </div>

                <SearchSheet />
            </header>
        </Sheet>
    );
}
