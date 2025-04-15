import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function FavoriteButton({ propertyId }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [hasConsent, setHasConsent] = useState(true); // assume true by default

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        setHasConsent(consent);

        if (consent) {
            const favorites = JSON.parse(Cookies.get('favorites') || '[]');
            setIsFavorite(favorites.includes(propertyId));
        }
    }, [propertyId]);

    const toggleFavorite = async () => {
        if (!hasConsent) return; // Block usage if no consent

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

        try {
            await axios.post('/favorite-properties/sync', {
                favorites: updatedFavorites,
            });
        } catch (err) {
            console.error('Failed to sync favorites:', err);
        }
    };

    return (
        <button onClick={toggleFavorite} disabled={!hasConsent}>
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
    );
}
