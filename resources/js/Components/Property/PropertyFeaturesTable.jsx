import { CheckCircle2, XCircle } from 'lucide-react';
import { usePage } from '@inertiajs/react';

export default function PropertyFeaturesTable({ property }) {
    const { static_text } = usePage().props;

    const BooleanIcon = (value) => {
        return value ? (
            <CheckCircle2 className="w-6 h-6 text-green-500" />
        ) : (
            <XCircle className="w-6 h-6 text-red-500" />
        );
    };

    const ValueOrIcon = ({ value }) => {
        return value !== null && value !== '' ? (
            <span>{value}</span>
        ) : (
            <XCircle className="w-6 h-6 text-gray-400" />
        );
    };

    return (
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <tbody>
                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.balcony}
                    </th>
                    <td className="px-6 py-4">
                        <BooleanIcon value={property.data.balcony == 1} />
                    </td>
                </tr>
                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.credit_eligible}
                    </th>
                    <td className="px-6 py-4">
                        <BooleanIcon value={property.data.credit_eligible == 1} />
                    </td>
                </tr>

                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.exchange_possibility}
                    </th>
                    <td className="px-6 py-4">
                        <BooleanIcon value={property.data.exchange_possibility == 1} />
                    </td>
                </tr>
                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.furnished}
                    </th>
                    <td className="px-6 py-4">
                        <BooleanIcon value={property.data.furnished == 1} />
                    </td>
                </tr>

                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.usage_status}
                    </th>
                    <td className="px-6 py-4">
                        {property.data.usage_status == "empty" && static_text.empty}
                        {property.data.usage_status == "property_owner" && static_text.property_owner}
                        {property.data.usage_status == "tenant" && static_text.tenant}
                    </td>
                </tr>
                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.on_site}
                    </th>
                    <td className="px-6 py-4">
                        <BooleanIcon value={property.data.on_site == 1} />
                    </td>
                </tr>

                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.site_dues}
                    </th>
                    <td className="px-6 py-4">
                        <ValueOrIcon value={property.data.site_dues} />
                    </td>
                </tr>
                <tr className="border-b border-gray-200 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {static_text.site_name}
                    </th>
                    <td className="px-6 py-4">
                        <ValueOrIcon value={property.data.site_name} />
                    </td>
                </tr>

            </tbody>
        </table>
    )
}
