import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { DataTable } from '../../../Components/Admin/DataTable';
import { usePage } from '@inertiajs/react';
import { propertyColumns } from '@/utils/PropertyTableColumns';

export default function Index() {
    const { properties } = usePage().props;
    console.log(properties.data)
    return (
        <AdminLayout>
            <Head title='Admin Panel' />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <DataTable filter={'address'} columns={propertyColumns} items={properties.data} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
