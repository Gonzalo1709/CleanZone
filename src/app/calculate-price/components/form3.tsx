import { dataType } from "@/lib/form-interface";

import React from "react";
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
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Divide } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

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

    console.log(body);

    // send data
    try {
      const { data, status } = await axios.post(
        "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/bookings",
        JSON.stringify(body),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(status);
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
