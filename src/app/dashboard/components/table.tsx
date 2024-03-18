import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogDemo } from "./modal";

const invoices = [
  {
    name: "Andres Chang",
    company: "Caca",
    email: "caca@gmail.com",
    phone: "974621155",
  },
];

interface TableDemoProps {
  name: string;
  company: string;
  email: string;
  phone: number;
}

export function TableDemo() {
  return (
    <Table className="">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>E-Mail</TableHead>
          <TableHead className="">Phone Number</TableHead>
          <TableHead className="">More Info</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.company}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell className="">{invoice.phone}</TableCell>
            <TableCell className="">
              {/* <Button className="h-[20px] w-[20px] rounded-md bg-green-500"></Button> */}
              <DialogDemo />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
