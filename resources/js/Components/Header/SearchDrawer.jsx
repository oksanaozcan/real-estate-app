import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/Components/ui/drawer";
import PrimaryButton from "../PrimaryButton";
import { IoMdClose } from "react-icons/io";
import TextInput from "../TextInput";
import { CiSearch } from "react-icons/ci";
import { Separator } from "../ui/separator";
import ResponsiveNavLink from "../ResponsiveNavLink";
import { GrFormNextLink } from "react-icons/gr";
import LanguageSwitcher from '@/Components/Header/LanguageSwitcher';
import ThemeToggle from '@/Components/Header/ThemeToggle';
import { usePage } from '@inertiajs/react'
import { useTranslation } from 'react-i18next';

export default function SearchDrawer({ isOpen, setIsOpen }) {
    const { auth } = usePage().props
    const { t } = useTranslation();

    return (
        <Drawer
            open={isOpen} onOpenChange={setIsOpen} direction="right"
        >
            <DrawerContent className="rounded-none">
                <DrawerHeader className="flex items-center justify-between">
                    <DrawerTitle className="flex-1 text-center">Search</DrawerTitle>
                    <DrawerClose>
                        <IoMdClose onClick={() => setIsOpen(false)} size={24}/>
                    </DrawerClose>
                </DrawerHeader>
                <TextInput className="mx-4" placeholder="City, Address, District" />
                <PrimaryButton className="flex items-center justify-center mx-4 my-4">
                    <CiSearch className="mr-2" size={18} />
                    Search
                </PrimaryButton>
                <Separator className="my-3" />
                <div>
                    <ResponsiveNavLink className="flex items-center justify-start text-center">Category <GrFormNextLink className="ml-1" size={18} /></ResponsiveNavLink>
                </div>
                <Separator className="my-3" />
                {auth.user ? (
                    <ResponsiveNavLink href={route('dashboard')}>{t('dashboard')}</ResponsiveNavLink>
                ) : (
                    <>
                        <ResponsiveNavLink href={route('login')}>{t('log_in')}</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('register')}>{t('register')}</ResponsiveNavLink>
                    </>
                )}
                <DrawerFooter>
                    <div><LanguageSwitcher /></div>
                    <div><ThemeToggle /></div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
