"use client";

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
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/getBookings?TableName=bookings"
      )
      .then(function (response) {
        // console.log(response.data.Items);
        setData(response.data.Items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <button onClick={() => console.log(data[0].personaContacto.S)}>test</button>
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
          {data.map((info) => (
            <TableRow key={info.personaContacto.S}>
              <TableCell className="font-medium">{info.personaContacto.S}</TableCell>
              <TableCell>{info.nombreEmpresa.S}</TableCell>
              <TableCell>{info.email.S}</TableCell>
              <TableCell className="">{info.telefonoContacto.N}</TableCell>
              <TableCell className="">
                {/* <Button className="h-[20px] w-[20px] rounded-md bg-green-500"></Button> */}
                <DialogDemo info={info} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
