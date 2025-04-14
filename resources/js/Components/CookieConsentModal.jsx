import { useEffect, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { Link } from '@inertiajs/react';
import Cookies from 'js-cookie';
import axios from "axios";
import { router } from '@inertiajs/react';

export default function CookieConsentModal() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleConsent = async () => {
        localStorage.setItem('cookie_consent', 'true');
        Cookies.set('cookie_consent', true, { expires: 60 });

        const consent = Cookies.get('cookie_consent');
        await axios.get(`/accept-cookie/${consent}`);

        setVisible(false);

        router.visit(page.url, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    if (!visible) return null;

    return (
        <div className="fixed z-50 max-w-xl p-4 mx-auto bg-white border shadow-lg bottom-4 left-4 right-4 dark:bg-gray-800">
            <p className="pb-1 text-sm text-gray-700 dark:text-gray-300">
                Bu site, kullanıcı deneyiminizi geliştirmek için çerezleri kullanır. Daha fazla bilgi için lütfen <Link href="/privacy-policy" className="underline"> çerez politikamıza </Link> göz atın.
            </p>
            <PrimaryButton onClick={handleConsent}>Kabul Et</PrimaryButton>
        </div>
    );
}
