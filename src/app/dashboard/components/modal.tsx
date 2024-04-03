import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { dataType } from "@/lib/form-interface";
import React, { useState } from "react";

import { form1, form2, form3 } from "@/lib/form-interface";

// @ts-ignore
export const DialogDemo: React.FC<dataType> = ({ info }) => {
  // const [form1Data, setForm1Data] = useState({});

  // setForm1Data(form1Data => ({
  //   ...form1Data,
  //   info.limpiarDespuesDeReforma,
  // }))
  // console.log(info.personaContacto);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-green-500">More Info</Button>
      </DialogTrigger>
      <DialogContent className="bg-white overflow-auto h-[80%] min-w-[50%]">
        <DialogHeader>
          <DialogTitle>More Information</DialogTitle>
          {/* <DialogDescription> */}
          {/* </DialogDescription> */}
        </DialogHeader>
        <div className="">
          <div className="">
            <table className="border-collapse border border-gray-400 w-full mb-8">
              <tbody>
                {form3.map((item) => (
                  <tr key={item.id} className="bg-gray-200">
                    <th className="py-2 px-4 border border-gray-400 text-left">
                      {item.p}
                    </th>
                    <td className="py-2 px-4 border border-gray-400">
                      {typeof info[item.id] === "string" && info[item.id]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="border-collapse border border-gray-400 w-full mb-8">
              <tbody>
                {form1.map((item) => (
                  <tr key={item.id} className="bg-gray-200">
                    <th className="py-2 px-4 border border-gray-400 text-left">
                      {item.p}
                    </th>
                    <td className="py-2 px-4 border border-gray-400">
                      {info[item.id] === true && (
                        <span className="text-green-500">Si</span>
                      )}
                      {info[item.id] === false && (
                        <span className="text-red-500">No</span>
                      )}
                      {typeof info[item.id] === "string" && info[item.id]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="border-collapse border border-gray-400 w-full mb-8">
              <caption className="font-bold">SA = Semanas Alternas</caption>
              <tbody>
                {form2.map((item) => (
                  <tr key={item.id} className="bg-gray-200">
                    <th className="py-2 px-4 border border-gray-400 text-left">
                      {item.p}
                    </th>
                    <td className="py-2 px-4 border border-gray-400">
                      {typeof info[item.id] === "string" ? (
                        info[item.id]
                      ) : info[item.id].length === 0 ? (
                        <span className="text-red-500">No</span>
                      ) : (
                        <DaysOfWeek days={info[item.id]} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => console.log(info)}>
            Invoice
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DaysOfWeek = ({ days }: any) => {
  const formattedDays = days.map((item: any, index: any) => (
    <React.Fragment key={index}>
      {index > 0 && ", "}
      {item.S.slice(0, 3)}
    </React.Fragment>
  ));

  return (
    <div>
      <h1 className="mb-1">{formattedDays}</h1>
    </div>
  );
};
