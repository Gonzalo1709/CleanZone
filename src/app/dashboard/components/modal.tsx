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

const form1 = [
  "¿Es necesario limpiar después de la reforma?",
  "Metros Cuadrados",
  "Número de despachos individuales",
  "¿El suelo es de moqueta?",
  "Limpieza periódica de moqueta",
  "Una vez cada",
  "Número total de puestos de trabajo",
  "Número total de sillas",
  "¿Tiene cocina u office?",
  "¿Es necesario limpiar vajillas?",
  "¿Tiene cuartos de baño?",
  "Observaciones",
];

export const DialogDemo: React.FC<dataType> = ({ info }) => {
  const [form1Data, setForm1Data] = useState({});

  // setForm1Data(form1Data => ({
  //   ...form1Data,
  //   info.limpiarDespuesDeReforma,
  // }))
  console.log(info);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Info</Button>
      </DialogTrigger>
      <DialogContent className=" bg-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div>
            <div className="flex">
              <div>
                {form1.map((item) => (
                  <h1 key={item}>{item}</h1>
                ))}
              </div>

              <div>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Invoice</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
