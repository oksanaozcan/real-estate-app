import ApplicationLogo from '@/Components/Header/ApplicationLogo';
import Navbar from '@/Components/Header/Navbar';
import { Link } from '@inertiajs/react';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import SearchDrawer from '@/Components/Header/SearchDrawer';

export default function Header({ }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <header className="grid items-center grid-cols-2 gap-2 py-10 lg:grid-cols-1">
            <div className="flex justify-start lg:justify-center">
                <Link href={route('home')}>
                    <ApplicationLogo className="h-12 w-auto text-white lg:h-16 lg:text-[#2075ff] fill-current" />
                </Link>
            </div>

            <div className="justify-end hidden space-x-8 sm:flex sm:-my-px">
                <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            </div>

            <div className="flex justify-end sm:hidden">
                <Hamburger
                    toggled={isDrawerOpen} toggle={setIsDrawerOpen}
                />
            </div>

            <SearchDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </header>
    );
}
