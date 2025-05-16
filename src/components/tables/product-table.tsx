"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, } from "lucide-react"

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CartItem } from "@/types/CartItem"
import { fuzzyFilter } from "@/utils/convert-to-latin"
import InputWithUnit from "../quantityControls/text"
import { AddToCartCell } from "./AddToCartCell"
import TabsComponent from "./tabs"

declare module '@tanstack/react-table' {
  interface TableMeta<TData> {
    updateData?: (newData: TData[]) => void
  }
}

export const columns: ColumnDef<CartItem>[] = [
 

    {
    accessorKey: "length",
    header: "Длина",
    cell: ({ row }) => (
      <div >{row.getValue("length")}</div>
    ),
  },
  {
  accessorKey: "title", 
  filterFn: fuzzyFilter,
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Название
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => {
    const title = row.getValue("title") as string;
    

    return (
      <div>
        {title} 
      </div>
    );
  },
}
,
  {
    accessorKey: "price",
    header: () => <div className="text-right">Цена</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))

      const formatted = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
{
  id: "count",
  header: () => <div className="text-center">Количество</div>,
  cell: ({ row }) => {
    const item = row.original 

    return (
      <InputWithUnit itemId={item._id}        />
    )
  }
}
,
{
  id: "actions",
  header: () => <div className="text-right">В корзину</div>,
  cell: ({ row }) => {
    const product = row.original;
    const item: CartItem = {
      _id: product._id,
      id: product.id,
      title: product.title,
      price: product.price,
      count: 1,
      unit: product.unit,
      type: product.type,
      fluidity: product.fluidity,
      size: product.size,
      length: product.length,
      weight: product.weight,
      diameterMm: product.diameterMm,
    };

    return <AddToCartCell item={item} />;
  }
}


]


export function ProductTable({ products }: { products: any }) {
  const [tableData, setTableData] = React.useState<CartItem[]>(products);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

 
 const updateData = (newData: CartItem[]) => {
    setTableData(newData);
  };

 const table = useReactTable({
    data: tableData,
    columns,
    meta: {
      updateData,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
  placeholder="Поиск по подразделу..."
  value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
  onChange={(event) =>
    table.getColumn("title")?.setFilterValue(event.target.value)
  }
  className="max-w-sm"
/>

<TabsComponent/>

        {/* Фильтры */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Фильтры <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Основная таблица */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
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

     
    </div>
  );
}

