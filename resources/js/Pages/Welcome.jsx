import BackgroundSVG from '@/Components/BackgroungSVG';
import Header from '@/Components/Header/Header';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { HiHomeModern } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { GiHouseKeys } from "react-icons/gi";
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';
import { Separator } from '@/Components/ui/separator';

export default function Welcome({ }) {
    const { properties } = usePage().props;
    const { t } = useTranslation();

    return (
        <>
            <Head title="Özcan emlak inşaat">
                <meta name="description" content="Didim'de güvenilir emlak danışmanınız! Satılık ve kiralık daireler, villalar ve arsalar için profesyonel hizmet. Hayalinizdeki mülke ulaşın!" />
            </Head>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <BackgroundSVG className="absolute -left-20 top-0 max-w-[877px]" />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Header />
                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <div>
                                    {
                                        properties.data.map(item => (
                                            <div key={item.id}>
                                                <div>{item.translations.title}</div>
                                                <div>{item.translations.description}</div>
                                                <Separator />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">

                                    <div className="absolute inset-0 bg-[url('/images/altinkum.jpg')] bg-cover bg-center bg-no-repeat">
                                        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
                                    </div>

                                    <div className="relative p-4 text-white rounded">
                                        <h2 className='pb-4 text-xl'>Aydın, Didim</h2>
                                        <h1 className='py-4 text-3xl font-bold'>Özcan Emlak İnşaat</h1>
                                        <p>{t('meta_descr')}</p>

                                        <div>
                                            search input template with filters
                                        </div>
                                        <div>
                                            <Link
                                                className='inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-none hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900'
                                                href={route('properties')}>View All property</Link>
                                        </div>
                                    </div>

                                </div>

                                <a
                                    href={route('dashboard')}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <HiHomeModern size={30} />
                                    </div>
                                    <div className="pt-3 sm:pt-5">
                                        <h5 className="text-xl font-semibold text-black dark:text-white">
                                            Detached house
                                        </h5>
                                    </div>
                                    <FaArrowRight size={30} />
                                </a>

                                <a
                                    href={route('dashboard')}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <MdApartment size={30} />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h5 className="text-xl font-semibold text-black dark:text-white">
                                            Apartment/Flat
                                        </h5>
                                    </div>
                                    <FaArrowRight size={30} />
                                </a>

                                <a
                                    href={route('dashboard')}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <IoStorefront size={30} />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h5 className="text-xl font-semibold text-black dark:text-white">
                                            Commercial
                                        </h5>
                                    </div>
                                    <FaArrowRight size={30} />
                                </a>

                                <a
                                    href={route('dashboard')}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <GrMapLocation size={30} />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h5 className="text-xl font-semibold text-black dark:text-white">
                                            Land & Lots
                                        </h5>
                                    </div>
                                    <FaArrowRight size={30} />
                                </a>

                                <a
                                    href={route('dashboard')}
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <GiHouseKeys size={30} />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h5 className="text-xl font-semibold text-black dark:text-white">
                                            Rentals
                                        </h5>
                                    </div>
                                    <FaArrowRight size={30} />
                                </a>

                            </div>
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
