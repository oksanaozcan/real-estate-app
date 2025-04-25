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

export default function FiltersSheet({ open, setOpen, filters, slug }) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        setMinPrice(filters.min_price || '');
        setMaxPrice(filters.max_price || '');
    }, [filters.min_price, filters.max_price]);

    const handleApply = () => {
        const params = {
            ...filters,
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

        router.get(route('category.show', { slug }), params, {
            preserveScroll: true,
            preserveState: true,
        });

        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-center">Filter by Price</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-4 my-6">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Min Price</label>
                        <TextInput
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            placeholder="No minimum"
                            min={0}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Max Price</label>
                        <TextInput
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder="No maximum"
                            min={0}
                        />
                    </div>
                </div>

                <SheetFooter className="flex gap-2">
                    <PrimaryButton onClick={handleApply}>Apply</PrimaryButton>
                    <SecondaryButton onClick={() => setOpen(false)}>Cancel</SecondaryButton>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
