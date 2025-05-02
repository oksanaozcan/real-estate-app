import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from "@/Components/ui/sheet";
import { useState, useEffect } from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { router } from '@inertiajs/react';
import TextInput from "../TextInput";
import { usePage } from '@inertiajs/react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

export default function FiltersSheet({ open, setOpen, filters, slug }) {
    const { static_text } = usePage().props;

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [listingType, setListingType] = useState('');
    const [minRooms, setMinRooms] = useState('');
    const [minBath, setMinBath] = useState('');
    const [minSquare, setMinSquare] = useState('');
    const [maxSquare, setMaxSquare] = useState('');

    const roomOptions = ['1', '2', '3', '4'];
    const bathOptions = ['1', '2', '3', '4'];

    useEffect(() => {
        setMinPrice(filters.min_price || '');
        setMaxPrice(filters.max_price || '');
        setListingType(filters.listing_type || '');
        setMinRooms(filters.min_rooms || '');
        setMinBath(filters.min_bath || '');
        setMinSquare(filters.min_square || '');
        setMaxSquare(filters.max_square || '');
    }, [filters]);

    const handleApply = () => {
        const params = {
            ...filters,
            ...(listingType && { listing_type: listingType }),
        };

        if (minPrice !== '') {
            params.min_price = minPrice;
        } else {
            delete params.min_price;
        }

        if (maxPrice !== '') {
            params.max_price = maxPrice;
        } else {
            delete params.max_price;
        }

        if (minRooms !== '') {
            params.min_rooms = minRooms;
        } else {
            delete params.min_rooms;
        }

        if (minBath !== '') {
            params.min_bath = minBath;
        } else {
            delete params.min_bath;
        }


        if (minSquare !== '') {
            params.min_square = minSquare;
        } else {
            delete params.min_square;
        }

        if (maxSquare !== '') {
            params.max_square = maxSquare;
        } else {
            delete params.max_square;
        }

        router.get(route('category.show', { slug }), params, {
            preserveScroll: true,
            preserveState: true,
        });

        setOpen(false);
    };

    const filterConfig = [
        {
            key: 'min_price',
            label: 'Min Price',
            value: minPrice,
            component: (
                <TextInput
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="No minimum"
                    min={0}
                />
            ),
        },
        {
            key: 'max_price',
            label: 'Max Price',
            value: maxPrice,
            component: (
                <TextInput
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="No maximum"
                    min={0}
                />
            ),
        },
        {
            key: 'listing_type',
            label: static_text.listing_type,
            value: listingType,
            component: (
                <Select value={listingType} onValueChange={(value) => setListingType(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder={static_text.listing_type} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="sale">{static_text.sale}</SelectItem>
                            <SelectItem value="rent">{static_text.rent}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ),
        },
        {
            key: 'min_rooms',
            label: static_text.rooms || 'Rooms',
            value: minRooms,
            component: (
                <div className="flex flex-wrap gap-2 py-2">
                    {roomOptions.map(num => (
                        <button
                            key={num}
                            type="button"
                            onClick={() => setMinRooms(num)}
                            className={`px-4 py-2 border rounded-md transition-colors ${minRooms === num
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            {num}+
                        </button>
                    ))}
                </div>
            ),
        },
        {
            key: 'min_bath',
            label: static_text.bathrooms || 'Bathrooms',
            value: minBath,
            component: (
                <div className="flex flex-wrap gap-2 py-2">
                    {roomOptions.map(num => (
                        <button
                            key={num}
                            type="button"
                            onClick={() => setMinBath(num)}
                            className={`px-4 py-2 border rounded-md transition-colors ${minBath === num
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            {num}+
                        </button>
                    ))}
                </div>
            ),
        },
        {
            key: 'min_square',
            label: 'Min Square',
            value: minSquare,
            component: (
                <TextInput
                    type="number"
                    value={minSquare}
                    onChange={(e) => setMinSquare(e.target.value)}
                    placeholder="No minimum"
                    min={0}
                />
            ),
        },
        {
            key: 'max_square',
            label: 'Max Square',
            value: maxSquare,
            component: (
                <TextInput
                    type="number"
                    value={maxSquare}
                    onChange={(e) => setMaxSquare(e.target.value)}
                    placeholder="No maximum"
                    min={0}
                />
            ),
        },
    ];

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-center">Filters</SheetTitle>
                </SheetHeader>

                <Accordion
                    type="single"
                    collapsible
                    defaultValue={filterConfig.find(f => f.value !== '')?.key}
                >
                    {filterConfig.map(filter => (
                        <AccordionItem key={filter.key} value={filter.key}>
                            <AccordionTrigger className={filter.value !== '' ? "text-blue-700 font-semibold border-l-4 border-blue-700 pl-2" : ""}>
                                {filter.label}
                            </AccordionTrigger>
                            <AccordionContent>{filter.component}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <SheetFooter className="block py-4">
                    <div className="flex gap-4">
                        <PrimaryButton className="flex items-center justify-center flex-1" onClick={handleApply}>Apply</PrimaryButton>
                        <SecondaryButton className="flex items-center justify-center flex-1" onClick={() => setOpen(false)}>Cancel</SecondaryButton>
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:underline"
                            onClick={() => {
                                setMinPrice('');
                                setMaxPrice('');
                                setListingType('');
                                setMinRooms('');
                                setMinBath('');
                            }}
                        >
                            Clear all filters
                        </button>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
