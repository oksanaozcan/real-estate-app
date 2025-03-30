import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <AdminLayout>
            <Head title='Admin Panel' />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Create new category page
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
