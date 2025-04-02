import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { CategoryDataTable } from '@/Components/Admin/CategoryDataTable';
import { usePage } from '@inertiajs/react';
import { categoryColumns } from '@/utils/CategoryTableColumns';

export default function Index() {
  const { categories } = usePage().props;
  return (
    <AdminLayout>
      <Head title='Admin Panel' />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <CategoryDataTable columns={categoryColumns} items={categories.data} />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
