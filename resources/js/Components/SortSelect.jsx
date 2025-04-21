import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { router } from "@inertiajs/react";

const sortOptions = [
    { value: "price-asc", label: "Price low to high" },
    { value: "price-desc", label: "Price high to low" },
    { value: "date-desc-rank", label: "Newest" },
    { value: "date-asc", label: "Oldest" },
    { value: "square-asc", label: "Smallest area" },
    { value: "square-desc", label: "Largest area" },
    { value: "rooms-asc", label: "Fewest rooms" },
    { value: "rooms-desc", label: "Most rooms" },
    { value: "floor-asc", label: "Lowest floor" },
    { value: "floor-desc", label: "Highest floor" },
];

export default function SortSelect({ currentSort, filters = {}, routeName }) {

    const handleSortChange = (value) => {
        const routeParams = filters.slug ? { slug: filters.slug } : {};

        router.get(route(routeName, routeParams), {
            ...filters,
            sort: value,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <Select onValueChange={handleSortChange} value={currentSort}>
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
