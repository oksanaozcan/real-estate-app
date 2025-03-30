import { usePage } from '@inertiajs/react';
import { SidebarProvider, SidebarTrigger } from '@/Components/ui/sidebar';
import AdminSidebar from '@/Components/Admin/AdminSidebar';

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;
    const { static_text } = usePage().props;
    
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
