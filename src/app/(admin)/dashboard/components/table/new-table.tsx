"use client";

import React, { useEffect } from "react";
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
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SignOutButton } from "@/components/buttons";
import { useSession } from "next-auth/react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
}

export function DataTable<TData, TValue>({
  columns,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [fetchData, setFetchData] = React.useState<any | undefined>(undefined);
  const [invalidFetch, setInvalidFetch] = React.useState('');
  const [data, setData] = React.useState<TData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const session = useSession();

  useEffect(() => {
    if (!session || session.status !== 'authenticated') return;
    try {
      fetch(
        "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/getBookings",
        {
          headers: {
            Authorization: (session as any).data?.token?.id_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            console.log('res', res)
            throw new Error(res.body?.toString());
          }
          return res.json();
        })
        .then((data) => {
          if (data.message === "Unauthorized") {
            setInvalidFetch("unauthorized");
            setLoading(false);
            console.log("User is not authorized to view this data.");
            return;
          }
          if (data.message) {
            setInvalidFetch(data.message);
            setLoading(false);
            return;
          }
          setFetchData(data);
        })
        .catch((error) => {
          setInvalidFetch(error.message);
          setLoading(false);
        });
    } catch (error: any) {
      setInvalidFetch(error.message);
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    if (!fetchData || fetchData === undefined) return;
    const formattedArrayOfObjects = fetchData.Items.map((obj: any) => {
      const extractedValues = {};
      for (const key in obj) {
        const value = obj[key];
        //@ts-ignore
        extractedValues[key] = Object.values(value)[0];
      }
      return extractedValues;
    });
    setData(formattedArrayOfObjects);
    setLoading(false);
  }, [fetchData]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
    },
  });


  useEffect(() => {
    setSorting([
      {
        desc: true,
        id: "creationDate",
      },
    ]);
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex h-0 w-[100%] justify-end">
          <div className="mt-3">
            <SignOutButton />
          </div>
        </div>
        <div className="flex justify-center items-center h-96 pt-6">
          <div className="animate-spin rounded-full h-32 w-32 border-2 border-r-0 border-t-0 border-[#14344b]"></div>
        </div>
      </>
    );
  }

  if (session.status !== "authenticated" || invalidFetch === 'unauthorized') {
    return (
      <div className="flex justify-center items-center h-96 pt-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">You are not authorized to view this content.</h1>
          <p className="text-muted-foreground mb-2">
            Your session token might have expired. Please sign in again. <br/>
            If the problem persists, contact an administrator.
          </p>
          <SignOutButton />
        </div>
      </div>
    );
  }

  if (invalidFetch !== '') {
    return (
      <div className="flex justify-center items-center h-96 pt-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">An error occurred while fetching data.</h1>
          <p className="text-muted-foreground mb-2">
            {invalidFetch}
          </p>
          <SignOutButton />
        </div>
      </div>
    );
  }

  return (
    <>
    {() => {console.log(data); console.log(session)}}
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter emails..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  // console.log(column.columnDef.header);
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize bg-white"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {/* @ts-ignore */}
                      {/* {column.columnDef.header} */}
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="ml-3">
            <SignOutButton />
          </div>
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
                    );
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
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {/* {table.getFilteredSelectedRowModel().rows.length} of{" "} */}
            {table.getFilteredRowModel().rows.length} total entries
          </div>
          <div className="space-x-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="bg-white"
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
        </div>
      </div>
    </>
  );
}
function then(arg0: () => void) {
  throw new Error("Function not implemented.");
}

