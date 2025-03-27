import BackgroundSVG from '@/Components/BackgroungSVG';
import Header from '@/Components/Header/Header';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Separator } from '@/Components/ui/separator';
import { usePage } from '@inertiajs/react';

export default function Properties() {
    const { properties } = usePage().props;

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
                            {
                                properties.data.map(item => (
                                    <div key={item.id}>
                                        <div>{item.translations.title}</div>
                                        <div>{item.translations.description}</div>
                                        <Separator />
                                    </div>
                                ))
                            }
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
