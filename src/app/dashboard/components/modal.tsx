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

const test = [
  {
    TableName: "bookings",
    Item: {
      limpiarDespuesDeReforma: false,
      metrosCuadrados: 0,
      numeroDeDespachosIndividuales: 0,
      sueloDeMoqueta: true,
      limpiezaPeriodicaDeMoqueta: true,
      unaVezCada: 0,
      totalDePuestosDeTrabajo: 0,
      totalDeSillas: 0,
      cocinaUOffice: false,
      cocinaUOfficeNumber: 0,
      limpiarVajillas: false,
      cuartosDeBano: false,
      cuartosDeBanoNumber: 0,
      observaciones: "test1312",
      diasDeLaSemana: 1,
      diasEnFinDeSemana: [],
      limpiezaPasilloEntrada: [],
      moqueta: [],
      fregadoDeSuelosConFregona: [],
      aspiradoraSinMoqueta: [],
      limpiezaDeDespachos: ["martes", "lunes"],
      limpiezaDeMesasZonasDiafanas: [],
      limpiezaDeSillas: [],
      limpiezaDeTelefonos: [],
      LimpiezaDeCocinas: [],
      limpiezaDeVajillas: [],
      limpiezaDeCuartosDeBano: [],
      nombreEmpresa: "tedasda",
      direccion: "dads",
      codigoPostal: 0,
      personaContacto: "",
      telefonoContacto: 12313123,
      email: "dasd@gmail.com",
      branch: "us-2",
    },
  },
];

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Info</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
