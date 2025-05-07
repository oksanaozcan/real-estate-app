import BackgroundSVG from '@/Components/BackgroungSVG';
import Header from '@/Components/Header/Header';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';
import PropertyImageSlider from '@/Components/Property/PropertyImageSlider';
import PropertyFeaturesTable from '@/Components/Property/PropertyFeaturesTable';
import FavoriteButton from '@/Components/FavoriteButton';
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import PropertyInfo from '@/Components/Property/PropertyInfo';

export default function Property() {
    const { property } = usePage().props;

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
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

                                <div className="lg:col-span-7">
                                    <PropertyImageSlider images={property.data.images} />
                                </div>

                                <div className="space-y-4 lg:col-span-5 lg:sticky lg:top-24">
                                    <div className='flex items-center justify-between py-2 lg:w-1/2'>
                                        <FavoriteButton propertyId={property.data.id} />
                                        <FaRegFilePdf className='w-6 h-6' />
                                        <FaRegShareSquare className='w-6 h-6' />
                                    </div>
                                    <PropertyInfo property={property} />
                                </div>

                            </div>
                            <div className='py-4'>
                                <p className='text-gray-700 dark:text-gray-300'>{property.data.translation?.description ?? 'Property Description'} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat in necessitatibus molestiae rem animi debitis id qui officiis praesentium ipsa nisi exercitationem, et perspiciatis at adipisci totam? Unde, nobis ullam?</p>
                            </div>

                            <div>
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <PropertyFeaturesTable property={property} />
                                </div>
                            </div>
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
