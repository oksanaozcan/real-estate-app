import BackgroundSVG from '@/Components/BackgroungSVG';
import Header from '@/Components/Header/Header';
import { Head, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';
import CategoryCardLink from '@/Components/CategoryCardLink';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Icons from "@/lib/icons";

export default function Welcome({ }) {
    const SearchIcon = Icons["search"] || Icons["fallback"];

    const { static_text, categories } = usePage().props;
    const { data, setData, get } = useForm({
        search: '',
        listing_type: '',
    })

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('properties'), {
            preserveScroll: true,
            preserveState: true,
        });
    }

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

                                <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">

                                    <div className="absolute inset-0 bg-[url('/images/altinkum.jpg')] bg-cover bg-center bg-no-repeat">
                                        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
                                    </div>

                                    <div className="relative p-4 text-white rounded">
                                        <h2 className='pb-4 text-xl'>Aydın, Didim</h2>
                                        <h1 className='py-4 text-3xl font-bold'>Özcan Emlak İnşaat</h1>
                                        {static_text.meta_descr}

                                        <div>

                                            <form onSubmit={handleSearch} className="mt-4">

                                                <div className="flex my-0 space-x-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setData('listing_type', 'sale')}
                                                        className={`px-4 py-2 text-sm font-medium transition-all
                                                            ${data.listing_type === 'sale'
                                                                ? 'bg-cyan-600 text-white'
                                                                : 'bg-white text-gray-700 border-0'}
                                                            dark:${data.listing_type === 'sale'
                                                                ? 'bg-cyan-600 text-white'
                                                                : 'bg-zinc-800 text-gray-200 border-0'}
                                                        `}
                                                    >
                                                        {static_text.sale}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setData('listing_type', 'rent')}
                                                        className={`px-4 py-2 text-sm font-medium transition-all
                                                            ${data.listing_type === 'rent'
                                                                ? 'bg-cyan-600 text-white'
                                                                : 'bg-white text-gray-700 border-0'}
                                                            dark:${data.listing_type === 'rent'
                                                                ? 'bg-cyan-600 text-white'
                                                                : 'bg-zinc-800 text-gray-200 border-0'}
                                                        `}
                                                    >
                                                        {static_text.rent}
                                                    </button>
                                                </div>

                                                <TextInput
                                                    value={data.search}
                                                    onChange={(e) => setData('search', e.target.value)}
                                                    className="w-full mt-0 text-black"
                                                    placeholder={static_text.city_address_district}
                                                />
                                                <PrimaryButton
                                                    className="flex items-center justify-center my-4"
                                                    onClick={handleSearch}
                                                >
                                                    <SearchIcon className="mr-2" size={18} />
                                                    {static_text.search}
                                                </PrimaryButton>

                                            </form>

                                        </div>

                                    </div>

                                </div>
                                {categories.data.map(category => (
                                    <CategoryCardLink
                                        key={category.id}
                                        category={category}
                                    />)
                                )}
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
