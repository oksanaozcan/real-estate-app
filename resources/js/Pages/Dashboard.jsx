import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { properties, static_text } = usePage().props;

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
                                        <th>{static_text.title}</th>
                                        <th>{static_text.description}</th>
                                        <th>{static_text.price}</th>
                                        <th>{static_text.address}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        properties.data.map(p => (
                                            <tr key={p.id}>
                                                <td>{p.translations.title}</td>
                                                <td>{p.translations.description}</td>
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
