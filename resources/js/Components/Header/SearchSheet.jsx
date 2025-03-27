import {
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/Components/ui/sheet"
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";
import { CiSearch } from "react-icons/ci";
import { Separator } from "../ui/separator";
import ResponsiveNavLink from "../ResponsiveNavLink";
import { GrFormNextLink } from "react-icons/gr";
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import ThemeToggle from '@/Components/Header/ThemeToggle';
import { usePage } from '@inertiajs/react'

export default function SearchSheet({ }) {
    const { auth, static_text } = usePage().props;
    return (
        <>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="pb-4 text-center">{static_text.search}</SheetTitle>
                </SheetHeader>

                <TextInput className="w-full" placeholder={static_text.city_address_district} />
                <PrimaryButton className="flex items-center justify-center my-4">
                    <CiSearch className="mr-2" size={18} />
                    {static_text.search}
                </PrimaryButton>
                <Separator className="my-3" />
                <div>
                    <ResponsiveNavLink className="flex items-center justify-start text-center">Category <GrFormNextLink className="ml-1" size={18} /></ResponsiveNavLink>
                </div>
                <Separator className="my-3" />
                {auth.user ? (
                    <ResponsiveNavLink href={route('dashboard')}>{static_text.dashboard}</ResponsiveNavLink>
                ) : (
                    <>
                        <ResponsiveNavLink href={route('login')}>{static_text.log_in}</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('register')}>{static_text.register}</ResponsiveNavLink>
                    </>
                )}
                <Separator className="my-3" />
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
