import * as React from "react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import { ChevronDown } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

// Fuzzy filter function
const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
};

export function PropertyDataTable({ columns, items }) {
    const [globalFilter, setGlobalFilter] = React.useState("");
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [sorting, setSorting] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});

    const data = items;

    const table = useReactTable({
        data,
        columns,
        filterFns: { fuzzy: fuzzyFilter },
        state: { sorting, columnFilters, columnVisibility, rowSelection, globalFilter },
        globalFilterFn: fuzzyFilter,
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="w-full">
            {/* Global Search */}
            <div className="flex items-center py-4 space-x-4">
                <Input
                    placeholder="Search all columns..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="max-w-sm"
                />

                {/* Category Filter */}
                <Input
                    placeholder="Filter by category..."
                    value={table.getColumn("categoryTitle")?.getFilterValue() || ""}
                    onChange={(e) => table.getColumn("categoryTitle")?.setFilterValue(e.target.value)}
                    className="max-w-sm"
                />

                {/* Address Filter */}
                 <Input
                    placeholder="Filter by address..."
                    value={table.getColumn("address")?.getFilterValue() || ""}
                    onChange={(e) => table.getColumn("address")?.setFilterValue(e.target.value)}
                    className="max-w-sm"
                />

                {/* Price Min */}
                <Input
                    type="number"
                    placeholder="Min Price"
                    value={table.getColumn("price")?.getFilterValue()?.min || ""}
                    onChange={(e) =>
                        table.getColumn("price")?.setFilterValue((prev) => ({
                            ...prev,
                            min: e.target.value ? Number(e.target.value) : undefined,
                        }))
                    }
                    className="max-w-sm"
                />

                {/* Price Max */}
                <Input
                    type="number"
                    placeholder="Max Price"
                    value={table.getColumn("price")?.getFilterValue()?.max || ""}
                    onChange={(e) =>
                        table.getColumn("price")?.setFilterValue((prev) => ({
                            ...prev,
                            max: e.target.value ? Number(e.target.value) : undefined,
                        }))
                    }
                    className="max-w-sm"
                />

                {/* Column Visibility */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table.getAllColumns().filter((col) => col.getCanHide()).map((col) => (
                            <DropdownMenuCheckboxItem
                                key={col.id}
                                className="capitalize"
                                checked={col.getIsVisible()}
                                onCheckedChange={(value) => col.toggleVisibility(!!value)}
                            >
                                {col.id}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Table */}
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end py-4 space-x-2">
                <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    Previous
                </Button>
                <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Next
                </Button>
            </div>
        </div>
    );
}
