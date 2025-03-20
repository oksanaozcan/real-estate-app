import ApplicationLogo from '@/Components/Header/ApplicationLogo';
import Navbar from '@/Components/Header/Navbar';
import { Link } from '@inertiajs/react';

export default function Header({ auth }) {
    return (
        <header className="grid items-center grid-cols-2 gap-2 py-10 lg:grid-cols-2">
            <div className="flex justify-start">
                <Link href={route('home')}>
                <ApplicationLogo className="h-12 w-auto text-white lg:h-16 lg:text-[#2075ff] fill-current" />
                </Link>
            </div>
            <div className="justify-end hidden space-x-8 sm:flex sm:-my-px">
                <Navbar auth={auth} />
            </div>
        </header>
    )
}
