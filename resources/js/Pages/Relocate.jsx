import BackgroundSVG from '@/Components/BackgroungSVG';
import Header from '@/Components/Header/Header';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Relocate({ auth }) {
    const { t } = useTranslation();

    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Özcan emlak inşaat">
                <meta name="description" content="Didim'de güvenilir emlak danışmanınız! Satılık ve kiralık daireler, villalar ve arsalar için profesyonel hizmet. Hayalinizdeki mülke ulaşın!" />
            </Head>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <BackgroundSVG className="absolute -left-20 top-0 max-w-[877px]" />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Header auth={auth}/>
                        <main className="mt-6">
                           <div>
                            Relocate Page
                           </div>
                        </main>

                        <footer className="py-16 text-sm text-center text-black dark:text-white/70">
                            Laravel footer
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
