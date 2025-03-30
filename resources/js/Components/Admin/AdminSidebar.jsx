import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
} from "@/Components/ui/sidebar";
import CollapsMenuItem from "./CollapsMenuItem";

const items = [
    {
        title: "Categories",
        routes: [
            {title: 'View all', route: 'categories.index' },
            {title: 'Create', route: 'categories.create' },
        ],
    },

];

export default function AdminSidebar() {

    return (
        <Sidebar>
            <SidebarHeader><div className="text-center">Admin Panel</div></SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map((item, i) =>  <CollapsMenuItem key={i} item={item}/>)
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>sidebar footer</SidebarFooter>
        </Sidebar>
    );
}
