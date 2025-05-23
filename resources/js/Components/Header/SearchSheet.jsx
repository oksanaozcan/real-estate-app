import {
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/Components/ui/sheet"
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";
import { Separator } from "../ui/separator";
import ResponsiveNavLink from "../ResponsiveNavLink";
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import ThemeToggle from '@/Components/Header/ThemeToggle';
import { usePage } from '@inertiajs/react'
import Icons from "@/lib/icons";
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function SearchSheet({ }) {
    const { auth, static_text, categories } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');

    const ArrowIcon = Icons["right_arrow"] || Icons["fallback"];
    const SearchIcon = Icons["search"] || Icons["fallback"];

    const handleSearch = () => {
        if (!searchTerm.trim()) return;
        router.get('/properties', {search: searchTerm});
    }

    return (
        <>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="pb-4 text-center">{static_text.search}</SheetTitle>
                </SheetHeader>

                <TextInput
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full"
                    placeholder={static_text.city_address_district}
                />
                <PrimaryButton
                    className="flex items-center justify-center my-4"
                    onClick={handleSearch}
                >
                    <SearchIcon className="mr-2" size={18} />
                    {static_text.search}
                </PrimaryButton>
                <Separator className="my-3" />
                <div>
                    {
                        categories.data.map(category => (
                            <ResponsiveNavLink
                                key={category.id}
                                href={`/categories/${category.key}`}
                                className="flex items-center justify-start text-center">
                                    {category.translations?.value || category.key} <ArrowIcon className="ml-4" size={14} />
                            </ResponsiveNavLink>
                        ))
                    }
                </div>
                <Separator className="my-3" />
                {auth.user ? (
                    <>
                    <ResponsiveNavLink href={route('dashboard')}>{static_text.dashboard}</ResponsiveNavLink>
                    <ResponsiveNavLink href={route('admin.dashboard')}>Admin</ResponsiveNavLink>
                    </>
                ) : (
                    <>
                        {/* <ResponsiveNavLink href={route('login')}>{static_text.log_in}</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('register')}>{static_text.register}</ResponsiveNavLink> */}
                    </>
                )}
                <PrimaryButton className="flex items-center justify-center my-4">
                    {static_text.contact}
                </PrimaryButton>

                <SheetFooter>
                    <div><LanguageSwitcher /></div>
                    <div><ThemeToggle /></div>
                </SheetFooter>
            </SheetContent>
        </>
    )
}
