import {
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/Components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import Icons from "@/lib/icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export default function CollapsMenuItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    const ChevRight = Icons["chevron_right"];

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
            <SidebarMenuItem>

                <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                        <div><span className="px-2">{item.title}</span>
                            <ChevRight className={cn(isOpen ? 'rotate-90 transition delay-100 duration-300 ease-in-out' : 'transition delay-100 duration-300 ease-in-out')} /></div>
                    </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent className="CollapsibleContent">
                    <SidebarMenuSub>
                        {
                            item.routes.map((r, i) =>
                                <SidebarMenuSubItem key={i}>
                                    <Link href={route(r.route)}>{r.title}</Link>
                                </SidebarMenuSubItem>
                            )
                        }
                    </SidebarMenuSub>
                </CollapsibleContent>

            </SidebarMenuItem>
        </Collapsible>
    )
}
