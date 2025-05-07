import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { router } from '@inertiajs/react'
import { useToast } from "@/hooks/use-toast"
import { usePage } from '@inertiajs/react'

export default function FavoriteButton({ propertyId }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [hasConsent, setHasConsent] = useState(true);

    const { toast } = useToast();
    const { flash } = usePage().props;

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        setHasConsent(consent);

        if (consent) {
            const favorites = JSON.parse(Cookies.get('favorites') || '[]');
            setIsFavorite(favorites.includes(propertyId));
        }
    }, [propertyId]);

    const toggleFavorite = async () => {
        if (!hasConsent) return;

        const currentFavorites = JSON.parse(Cookies.get('favorites') || '[]');
        let updatedFavorites;

        if (currentFavorites.includes(propertyId)) {
            updatedFavorites = currentFavorites.filter(id => id !== propertyId);
        } else {
            updatedFavorites = [...currentFavorites, propertyId];
        }

        Cookies.set('favorites', JSON.stringify(updatedFavorites), {
            expires: 60,
            path: '/',
            sameSite: 'Lax',
        });

        setIsFavorite(updatedFavorites.includes(propertyId));

        router.post('/favorite-properties/sync', {
            favorites: updatedFavorites
        }, {
            preserveScroll: true,
            preserveState: true,
            only: ['flash'], // optional: limits what gets refreshed
        });

        toast({
            title: "Success",
            description: flash.message,
        })
    };

    return (
        <button onClick={toggleFavorite} disabled={!hasConsent}>
            {isFavorite ? <FaHeart className="w-5 h-5 text-red-500" /> : <FaRegHeart className='w-5 h-5' />}
        </button>
    );
}
