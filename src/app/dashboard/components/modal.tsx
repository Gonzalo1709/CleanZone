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

const caca = [
  { text: "¿Es necesario limpiar después de la reforma?", answer: "yes" },
  { text: "Metros Cuadrados", answer: "yes" },
  { text: "Número de despachos individuales", answer: "yes" },
  { text: "¿El suelo es de moqueta?", answer: "yes" },
  { text: "Limpieza periódica de moqueta", answer: "yes" },
  { text: "Una vez cada", answer: "yes" },
  { text: "Número total de puestos de trabajo", answer: "yes" },
  { text: "Número total de sillas", answer: "yes" },
  { text: "¿Tiene cocina u office?", answer: "yes" },
  { text: "¿Es necesario limpiar vajillas?", answer: "yes" },
  { text: "¿Tiene cuartos de baño?", answer: "yes" },
  { text: "Observaciones", answer: "yes" },
];

export function DialogDemo() {
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
            <table className="">
              {caca.map((item) => (
                <tr key={item.text} className="border-1">
                  <td>{item.text}</td>
                  <td className="pl-5">{item.answer}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
