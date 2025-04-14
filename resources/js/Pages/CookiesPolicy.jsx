import { Head } from '@inertiajs/react';

export default function CookiesPolicy() {
    return (
        <>
            <Head title="Çerez Politikası" />
            <div className="max-w-3xl px-4 py-12 mx-auto">
                <h1 className="mb-6 text-3xl font-bold">Çerez Politikası</h1>

                <p className="mb-4">
                    Bu Çerez Politikası, {import.meta.env.VITE_APP_NAME || 'Web Sitemiz'} üzerinden çerez kullanımımıza ilişkin bilgileri içermektedir. Web sitemizi ziyaret ettiğinizde, cihazınıza belirli çerezler yerleştirilebilir.
                </p>

                <h2 className="mt-8 mb-2 text-xl font-semibold">1. Çerez Nedir?</h2>
                <p className="mb-4">
                    Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük veri dosyalarıdır. Çerezler genellikle site tercihlerinizi hatırlamak ve kullanıcı deneyiminizi geliştirmek için kullanılır.
                </p>

                <h2 className="mt-8 mb-2 text-xl font-semibold">2. Kullandığımız Çerez Türleri</h2>
                <ul className="mb-4 ml-6 space-y-2 list-disc">
                    <li>
                        <strong>Oturum Çerezleri (laravel_session)</strong>: Giriş yaptıktan sonra oturumunuzu yönetmek için kullanılır. Gerekli ve zorunludur.
                    </li>
                    <li>
                        <strong>CSRF Koruma Çerezi (XSRF-TOKEN)</strong>: Form gönderimlerinde güvenlik amacıyla kullanılır. Gerekli ve zorunludur.
                    </li>
                    <li>
                        <strong>Dil Tercihi (lang)</strong>: Sitede hangi dili tercih ettiğinizi hatırlamak için tarayıcınıza kaydedilir.
                    </li>
                    <li>
                        <strong>Tema Tercihi (localStorage)</strong>: Aydınlık veya karanlık tema tercihinizi hatırlamak için localStorage kullanılır.
                    </li>
                </ul>

                <h2 className="mt-8 mb-2 text-xl font-semibold">3. Çerezleri Nasıl Yönetebilirsiniz?</h2>
                <p className="mb-4">
                    Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Ancak bazı çerezleri devre dışı bırakmak, sitenin düzgün çalışmamasına neden olabilir.
                </p>

                <h2 className="mt-8 mb-2 text-xl font-semibold">4. Üçüncü Taraf Çerezler</h2>
                <p className="mb-4">
                    Şu anda herhangi bir üçüncü taraf analiz veya reklam çerezi kullanmamaktayız. Ancak gelecekte böyle bir kullanım olursa, bu politikayı güncelleyeceğiz.
                </p>

                <h2 className="mt-8 mb-2 text-xl font-semibold">5. Politika Güncellemeleri</h2>
                <p className="mb-4">
                    Bu çerez politikası zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlanacaktır.
                </p>

                <p className="mt-6 text-sm text-gray-500">
                    Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </p>
            </div>
        </>
    );
}
