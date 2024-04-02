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
        <Button variant="outline">Info</Button>
      </DialogTrigger>
      <DialogContent className="bg-white overflow-auto h-[80%] min-w-[50%]">
        <DialogHeader>
          <DialogTitle>More Information</DialogTitle>
          {/* <DialogDescription> */}
          {/* </DialogDescription> */}
        </DialogHeader>
        <div className="">
          <div className="">
            <table className="border-collapse border border-gray-400 w-full mb-5">
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
            {/* <div className="flex mb-5">
              <div>
                {form1.map((item) => (
                  <h1 key={item.id} className="mb-1">
                    {item.p}
                  </h1>
                ))}
              </div>

              <div className="ml-auto">
                {form1.map((item) => {
                  if (info[item.id] === true) {
                    return (
                      <h1 key={item.id} className="mb-1 text-green-500">
                        Si
                      </h1>
                    );
                  } else if (info[item.id] === false) {
                    return (
                      <h1 key={item.id} className="mb-1 text-red-500">
                        No
                      </h1>
                    );
                  } else {
                    return (
                      <h1 key={item.id} className="mb-1">
                        {info[item.id]}
                      </h1>
                    );
                  }
                })}
              </div>
            </div> */}
            <table className="border-collapse border border-gray-400 w-full">
              <tbody>
                {form2.map((item) => (
                  <tr key={item.id}>
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

            {/* <div className="flex">
              <div>
                {form2.map((item) => (
                  <h1 key={item.id} className="mb-1">
                    {item.p}
                  </h1>
                ))}
              </div>

              <div className="ml-auto">
                {form2.map((item) => {
                  // console.log(info[item.id]);
                  if (typeof info[item.id] === "string") {
                    return (
                      <h1 key={item.id} className="mb-1">
                        {info[item.id]}
                      </h1>
                    );
                  } else if (info[item.id].length === 0) {
                    return (
                      <h1 key={item.id} className="text-red-500 mb-1">
                        No
                      </h1>
                    );
                  } else {
                    return <DaysOfWeek key={item.id} days={info[item.id]} />;
                    // return <h1 key={item.id}>test</h1>;
                  }
                })}
              </div>
            </div> */}

            <h1 className="mb-5 font-bold ml-4 mt-2">SA* = Semanas Alternas</h1>
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

const DaysOfWeek = ({ days }) => {
  const formattedDays = days.map((item, index) => (
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
