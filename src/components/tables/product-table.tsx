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
import { ArrowUpDown, ChevronDown, Minus, Plus, ShoppingBasket } from "lucide-react"

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
declare module '@tanstack/react-table' {
  interface TableMeta<TData> {
    updateData?: (newData: TData[]) => void
  }
}

const data: Payment[] = [
  { id: "m5gr84i9", amount: 316, l: "3 м", name: "Арматура А3 А500С рифленая 6 мм.", count: 1 },
  { id: "3u1reuv4", amount: 242, l: "6 м", name: "Арматура А3 А500С рифленая 8 мм.", count: 1 },
  { id: "derv1ws0", amount: 837, l: "12 м", name: "Арматура А3 А500С рифленая 10 мм.", count: 1 },
  { id: "5kma53ae", amount: 874, l: "3 м", name: "Арматура А3 А500С рифленая 12 мм.", count: 1 },
  { id: "bhqecj4p", amount: 721, l: "н/м", name: "Арматура А3 А500С рифленая 14 мм.", count: 1 },
]

export type Payment = {

  id: string
  amount: number
  l: "3 м" | "6 м" | "12 м" | "н/м"
  name: string
  count?: number
}

export const columns: ColumnDef<Payment>[] = [
    {
    accessorKey: "l",
    header: "Длина",
    cell: ({ row }) => (
      <div >{row.getValue("l")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Название
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div>
  {String(row.getValue("name"))
    .split(" ")
    .map((word, index, arr) =>
      index === arr.length - 1
        ? word 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
    )
    .join(" ")}
</div>
,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Цена</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

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
  cell: ({ row, table }) => {
    const item = row.original
    const updateRow = (newCount: number) => {
      const updatedRow = { ...item, count: newCount }
      const newData = [...table.options.data]
      newData[row.index] = updatedRow
      if (table.options.meta?.updateData) {
        table.options.meta.updateData(newData)
      }
    }

    const handleIncrement = () => updateRow((item.count || 0) + 1)
    const handleDecrement = () => updateRow(Math.max(0, (item.count || 0) - 1))
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10)
      updateRow(!isNaN(value) ? value : 0)
    }

    return (
      <div className="p-2 text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="icon" className="h-6 w-6" onClick={handleDecrement}>
            <Minus className="h-4 w-4" />
            <span className="sr-only">Уменьшить</span>
          </Button>

          <Input
            type="number"
            inputMode="numeric"
            className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={item.count}
            onChange={handleChange}
          />

          <Button variant="outline" size="icon" className="h-6 w-6" onClick={handleIncrement}>
            <Plus className="h-4 w-4" />
            <span className="sr-only">Увеличить</span>
          </Button>
        </div>
      </div>
    )
  }
}
,
{
  id: "sum",
  header: () => <div className="text-right">Итого</div>,
  cell: ({ row }) => {
    const amount = row.original.amount
    const count = parseInt(row.original.count as any) || 0
    const total = amount * count

    const formatted = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(total)

    return <div className="text-right font-medium">{formatted}</div>
  }
}
,
{
  id: "actions",
   header: () => <div className="text-right">В корзину</div>,
  cell: ({ row }) => {
    const payment = row.original
    return(
      console.log(payment),
      <div className="flex justify-end mr-5 hover:text-accent transition-all duration-300">
        <ShoppingBasket />
      </div>
    )
  }
}
]

export function ProductTable(products: any) {
    console.log(products);
      const [tableData, setTableData] = React.useState<Payment[]>(data)

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
const updateData = (newData: Payment[]) => {
    setTableData(newData)
  }
   const table = useReactTable({
    data: tableData,
    columns,
    meta: {
      updateData, // 
    },
    // остальные параметры:
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
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Поиск по подразделу..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        
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
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        &nbsp;
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              Отобразить <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  )
}
