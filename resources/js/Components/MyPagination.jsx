import { Link } from '@inertiajs/react';

export default function MyPagination({ meta }) {
    const paginationLinks = meta?.links || [];

    return (
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-2">
            {paginationLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.url || ''}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`px-4 py-2 border rounded transition-all duration-200
                        ${link.active ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
                        ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                />
            ))}
        </div>
    );
}
