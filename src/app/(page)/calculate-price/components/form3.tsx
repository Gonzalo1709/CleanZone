import { dataType } from "@/lib/form-interface";

import React, { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogOverlay } from "@radix-ui/react-dialog";


interface FormThreeProps {
  currentForm: string;
  setCurrentForm: Dispatch<SetStateAction<string>>;
  data: dataType;
  setData: Dispatch<SetStateAction<dataType>>;
}

const formSchema = z.object({
  nombreEmpresa: z.string(),
  direccion: z.string(),
  codigoPostal: z.coerce.number(),
  personaContacto: z.string(),
  telefonoContacto: z.coerce.number(),
  email: z.string(),
});

const FormThree: React.FC<FormThreeProps> = ({
  currentForm,
  setCurrentForm,
  data,
  setData,
}) => {

  const [allowReload, setAllowReload] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (allowReload && !open) {
      window.location.href = "/";
    }
  }, [open]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreEmpresa: data.nombreEmpresa,
      direccion: data.direccion,
      codigoPostal: data.codigoPostal,
      personaContacto: data.personaContacto,
      telefonoContacto: data.telefonoContacto,
      email: data.email,
    },
  });

  function goBack(values: z.infer<typeof formSchema>) {
    setData({
      ...data,
      nombreEmpresa: values.nombreEmpresa,
      direccion: values.direccion,
      codigoPostal: values.codigoPostal,
      personaContacto: values.personaContacto,
      telefonoContacto: values.telefonoContacto,
      email: values.email,
    });
    setCurrentForm("formTwo");
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setData({
      ...data,
      nombreEmpresa: values.nombreEmpresa,
      direccion: values.direccion,
      codigoPostal: values.codigoPostal,
      personaContacto: values.personaContacto,
      telefonoContacto: values.telefonoContacto,
      email: values.email,
    });

    // attach branch to object
    const body = Object.assign({}, data, {
      branch: process.env.NEXT_PUBLIC_CURRENT_BRANCH,
    });

    // add new values to body object
    body["nombreEmpresa"] = values.nombreEmpresa;
    (body["direccion"] = values.direccion),
      (body["codigoPostal"] = values.codigoPostal);
    body["personaContacto"] = values.personaContacto;
    body["telefonoContacto"] = values.telefonoContacto;
    body["email"] = values.email;

    const formatedBody = {
      TableName: "bookings",
      Item: body,
    };

    // send data
    try {
      const { data, status } = await axios.post(
        "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/handleAddBooking",
        JSON.stringify(formatedBody),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("status", status);
      console.log("data", data);
      setAllowReload(true);
      setOpen(true);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger/>
        <DialogOverlay>
          <DialogContent className="bg-[#0b132b] text-white border-[#0b132b]">
            <DialogHeader >
              <DialogTitle>Success</DialogTitle>
              <DialogDescription>
                Your request has been successfully submitted. A representative will contact you soon.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button className="hover:bg-[#3a506b] bg-[#1c2541]" type="button" onClick={() => window.location.href = '/'}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </Dialog>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-[300px] sm:w-[400px]"
        >
          <FormField
            control={form.control}
            name="nombreEmpresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de Empresa</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="direccion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="codigoPostal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código Postal</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personaContacto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Persona Contacto</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefonoContacto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono Contacto</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
          <Button type="button" onClick={form.handleSubmit(goBack)}>
            Go back
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormThree;
