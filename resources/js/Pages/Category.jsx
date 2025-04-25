import BackgroundSVG from '@/Components/BackgroungSVG';
import Header from '@/Components/Header/Header';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';
import CardList from '@/Components/CardList';
import MyPagination from '@/Components/MyPagination';
import SortSelect from '@/Components/SortSelect';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Icons from "@/lib/icons";
import SecondaryButton from '@/Components/SecondaryButton';
import FiltersSheet from '@/Components/Header/FiltersSheet';
import { useState } from 'react';

export default function Category() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const SearchIcon = Icons["search"] || Icons["fallback"];

    const { properties, filters, category } = usePage().props;
    const totalItems = properties.meta?.total || 0;
    const slug = category?.key;

    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('category.show', { slug: category.key }), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const activeFilterCount = [
        filters.min_price,
        filters.max_price,
        filters.search,
        // Add more later
    ].filter(Boolean).length;

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
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center justify-between gap-2'>
                                    <form onSubmit={handleSearch} className="flex items-center justify-start mt-4">
                                        <TextInput
                                            value={data.search}
                                            onChange={(e) => setData('search', e.target.value)}
                                            placeholder="Search in this category"
                                            className="h-10"
                                        />
                                        <PrimaryButton
                                            type="submit"
                                            className="flex items-center justify-center h-10 px-4"
                                            disabled={processing}
                                        >
                                            <SearchIcon className="mr-2" size={18} />
                                        </PrimaryButton>
                                    </form>

                                    <SecondaryButton
                                        className="h-10 px-4 mt-4 rounded-none"
                                        onClick={() => setIsFilterOpen(true)}
                                    >
                                        Filters({activeFilterCount})
                                    </SecondaryButton>

                                </div>

                                <div className='mt-4'>
                                    <SortSelect
                                        currentSort={filters.sort}
                                        filters={{ ...filters, slug }}
                                        routeName="category.show"
                                    />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <figure className="m-2 text-center">
                                        <figcaption className="text-lg font-semibold">
                                            Result: {totalItems}
                                        </figcaption>
                                    </figure>
                                </div>
                                <CardList properties={properties.data} />
                                <MyPagination links={properties.links} meta={properties.meta} />
                            </div>
                            <FiltersSheet open={isFilterOpen} setOpen={setIsFilterOpen} filters={filters} slug={slug} />
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

