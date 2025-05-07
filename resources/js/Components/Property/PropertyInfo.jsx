import { Separator } from '@/Components/ui/separator';
import { usePage } from '@inertiajs/react';

export default function PropertyInfo({ property }) {
    const { static_text } = usePage().props;

    return (
        <div className='space-y-4'>
            <p><strong>No: </strong><span className='font-bold text-cyan-700'>{property.data.id}</span></p>
            <h1 className="text-2xl font-bold text-black lg:text-3xl dark:text-white">
                {property.data.translation?.title ?? 'Property Title'}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.address}:</strong> {property.data.address}
            </p>
            <p className="font-bold text-cyan-800 dark:text-gray-300">
                <strong>{static_text.price}:</strong> {property.data.price} ₺
            </p>
            <Separator />
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.rooms}:</strong> {property.data.rooms} + {property.data.salon}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.bathrooms}:</strong> {property.data.bathrooms}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.square}:</strong> {property.data.square} m²
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.categories}:</strong> {property.data.category?.translation?.value}
            </p>
            <Separator />
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.building_age}:</strong> {property.data.building_age}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.floors_number}:</strong> {property.data.floors_number}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.located_floor}:</strong> {property.data.located_floor}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>{static_text.kitchen}:</strong> {property.data.kitchen === 'closed' ? static_text.closed : static_text.opened}
            </p>
        </div>
    )
}
