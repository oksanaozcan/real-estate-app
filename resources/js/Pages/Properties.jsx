import BackgroundSVG from '@/Components/BackgroungSVG';
import Header from '@/Components/Header/Header';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';
import CardList from '@/Components/CardList';
import MyPagination from '@/Components/MyPagination';

export default function Properties() {
    const { properties } = usePage().props;
    const totalItems = properties.meta?.total || 0;

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
                            <div>
                                <div>
                                    <figure className="mt-4 text-center">
                                        <figcaption className="text-lg font-semibold">
                                            Result: {totalItems}
                                        </figcaption>
                                    </figure>
                                </div>
                                <CardList properties={properties.data} />
                                <MyPagination links={properties.links} meta={properties.meta} />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
