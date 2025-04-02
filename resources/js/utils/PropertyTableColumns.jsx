import * as React from "react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export const propertyColumns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorFn: (row) => row.translations.title,
        id: "translationsTitle",
        header: "başlık",
        cell: ({ row }) => <div>{row.original.translations.title}</div>,
    },
    {
        accessorKey: "address",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Adres
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("address")}</div>,
        filterFn: "includesString",
    },
    {
        accessorFn: (row) => row.category.translation.value,
        id: "categoryTitle",
        header: "Kategori",
        cell: ({ row }) => <div>{row.original.category.translation.value}</div>,
        filterFn: "includesString",
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Fiyat
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("price")}</div>,
        filterFn: (row, columnId, value) => {
            const price = row.getValue(columnId);
            const min = value?.min ?? Number.MIN_VALUE;
            const max = value?.max ?? Number.MAX_VALUE;
            return price >= min && price <= max;
        },
    },
    {
        accessorKey: "square",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                m2
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("square")}</div>,
    },
    {
        accessorKey: "rooms",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                oda
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("rooms")}</div>,
    },
    {
        accessorKey: "kitchen",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                mutfak
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("kitchen")}</div>,
    },
    {
        accessorKey: "bathrooms",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Banyo
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("bathrooms")}</div>,
    },
    {
        accessorKey: "balcony",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Balkon
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("balcony")}</div>,
    },
    {
        accessorKey: "building_age",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Bina Yaşı
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("building_age")}</div>,
    },
    {
        accessorKey: "credit_eligible",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Krediye Uygun
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => {
            let val = row.getValue("credit_eligible");
            return <div className="lowercase">{val == '1' ? "yes" : "no"}</div>
        }
    },
    {
        accessorKey: "exchange_possibility",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Takas
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => {
            let val = row.getValue("exchange_possibility");
            return <div className="lowercase">{val == '1' ? "yes" : "no"}</div>
        }
    },
    {
        accessorKey: "floors_number",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Kat Sayısı
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("floors_number")}</div>,
    },
    {
        accessorKey: "furnished",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Eşyalı
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("furnished") == '1' ? 'yes' : 'no'}</div>,
    },
    {
        accessorKey: "located_floor",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Bulunduğu Kat
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("located_floor")}</div>,
    },
    {
        accessorKey: "on_site",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Site İçinde
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("on_site")}</div>,
    },
    {
        accessorKey: "site_dues",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Aydat
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("site_dues")}</div>,
    },
    {
        accessorKey: "site_name",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Site Adı
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("site_name")}</div>,
    },
    {
        accessorKey: "usage_status",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Kullanım Durumu
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("usage_status")}</div>,
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Created at
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("created_at")}</div>,
    },
    {
        accessorKey: "is_published",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                is/pub
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("is_published") == '1' ? 'yes' : 'no'}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
