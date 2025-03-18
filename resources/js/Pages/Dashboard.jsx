import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Dashboard({ properties }) {
    const { t } = useTranslation();
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="table-fixed">
                                <thead>
                                    <tr>
                                        <th>{t('title')}</th>
                                        <th>{t('description')}</th>
                                        <th>{t('price')}</th>
                                        <th>{t('address')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        properties.map(p => (
                                            <tr key={p.id}>
                                                <td>{p.translations[0].title}</td>
                                                <td>{p.translations[0].description}</td>
                                                <td>{p.price}</td>
                                                <td>{p.address}</td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
