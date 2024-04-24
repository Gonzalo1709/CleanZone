"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { dataType } from "@/lib/form-interface";
import React, { useState } from "react";

import { form1, form2, form3 } from "@/lib/form-interface";

import axios from "axios";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

// @ts-ignore
export const DialogDemo: React.FC<dataType> = ({ info }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();

  async function deleteEntry() {
    axios
      .delete(
        "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/handleDeleteBooking",
        { params: { branch: info.branch, id: info.id } }
      )
      .then((res) => {
        // console.log(res);
        toast({
          description: "Entry was deleted.",
          action: (
            <ToastAction
              altText="Refresh"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Refresh
            </ToastAction>
          ),
        });
        // toast({
        //   title: "Entry was deleted",
        //   action: (
        //     <div className="bg-white">
        //       <ToastAction
        //         altText="Goto schedule to undo"
        //         className="bg-white text-black"
        //       >
        //         Undo
        //       </ToastAction>
        //     </div>
        //   ),
        // });
      });
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger />
        <DialogOverlay>
          <DialogContent className="bg-white text-black border-[#0b132b]">
            <DialogHeader>
              <DialogTitle>
                Are you sure you want to delete this entry?
              </DialogTitle>
              <DialogDescription>
                This proccess cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                className="text-white bg-[#dc2626]"
                type="button"
                onClick={() => deleteEntry()}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
            <Button className="bg-green-500">More Info</Button>
        </DialogTrigger>
        <DialogContent className="bg-white overflow-auto h-[80%] min-w-[80%]">
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
                      <td className="py-2 px-4 border border-gray-400 max-w-full">
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
            <Button
              type="submit"
              onClick={() => console.log(info)}
              className="bg-gray-500 text-white"
            >
              Invoice
            </Button>
            <Button
              type="submit"
              onClick={() => setOpen(true)}
              // onClick={() => deleteEntry()}
              className="bg-[#dc2626] text-white"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
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
