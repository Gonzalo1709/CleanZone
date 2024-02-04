"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";

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
import { Checkbox } from "@/components/ui/checkbox";

import { dataType } from "@/lib/form-interface";

const formSchema = z.object({
  limpiarDespuesDeReforma: z.boolean(),
  metrosCuadrados: z.coerce.number(),
  numeroDeDespachosIndividuales: z.coerce.number(),
  sueloDeMoqueta: z.boolean(),
  limpiezaPeriodicaDeMoqueta: z.boolean(),
  unaVezCada: z.coerce.number(),
  totalDePuestosDeTrabajo: z.coerce.number(),
  totalDeSillas: z.coerce.number(),
  cocinaUOffice: z.boolean(),
  cocinaUOfficeNumber: z.coerce.number(),
  limpiarVajillas: z.boolean(),
  cuartosDeBano: z.boolean(),
  cuartosDeBanoNumber: z.coerce.number(),
  observaciones: z.string(),
});

interface FormOneProps {
  currentForm: string;
  setCurrentForm: Dispatch<SetStateAction<string>>;
  data: dataType;
  setData: Dispatch<SetStateAction<dataType>>;
}

const FormOne: React.FC<FormOneProps> = ({
  currentForm,
  setCurrentForm,
  data,
  setData,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      limpiarDespuesDeReforma: data.limpiarDespuesDeReforma,
      metrosCuadrados: data.metrosCuadrados,
      numeroDeDespachosIndividuales: data.numeroDeDespachosIndividuales,
      sueloDeMoqueta: data.sueloDeMoqueta,
      limpiezaPeriodicaDeMoqueta: data.limpiezaPeriodicaDeMoqueta,
      unaVezCada: data.unaVezCada,
      totalDePuestosDeTrabajo: data.totalDePuestosDeTrabajo,
      totalDeSillas: data.totalDeSillas,
      cocinaUOffice: data.cocinaUOffice,
      cocinaUOfficeNumber: data.cocinaUOfficeNumber,
      limpiarVajillas: data.limpiarVajillas,
      cuartosDeBano: data.cuartosDeBano,
      cuartosDeBanoNumber: data.cuartosDeBanoNumber,
      observaciones: data.observaciones,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setData({
      limpiarDespuesDeReforma: values.limpiarDespuesDeReforma,
      metrosCuadrados: values.metrosCuadrados,
      numeroDeDespachosIndividuales: values.numeroDeDespachosIndividuales,
      sueloDeMoqueta: values.sueloDeMoqueta,
      limpiezaPeriodicaDeMoqueta: values.limpiezaPeriodicaDeMoqueta,
      unaVezCada: values.unaVezCada,
      totalDePuestosDeTrabajo: values.totalDePuestosDeTrabajo,
      totalDeSillas: values.totalDeSillas,
      cocinaUOffice: values.cocinaUOffice,
      cocinaUOfficeNumber: values.cocinaUOfficeNumber,
      limpiarVajillas: values.limpiarVajillas,
      cuartosDeBano: values.cuartosDeBano,
      cuartosDeBanoNumber: values.cuartosDeBanoNumber,
      observaciones: values.observaciones,
    });

    setCurrentForm("formTwo");

    const body = Object.assign({}, values, { branch: process.env.NEXT_PUBLIC_CURRENT_BRANCH });

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="limpiarDespuesDeReforma"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Limpiar despues de reforma</FormLabel>
              <FormControl>
                <Switch
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="metrosCuadrados"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Metros Cuadrados</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numeroDeDespachosIndividuales"
          render={({ field }) => (
            <FormItem>
              <FormLabel>numeroDeDespachosIndividuales</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sueloDeMoqueta"
          render={({ field }) => (
            <FormItem>
              <FormLabel>sueloDeMoqueta</FormLabel>
              <FormControl>
                <Switch
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="limpiezaPeriodicaDeMoqueta"
          render={({ field }) => (
            <FormItem>
              <FormLabel>limpiezaPeriodicaDeMoqueta</FormLabel>
              <FormControl>
                <Switch
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="unaVezCada"
          render={({ field }) => (
            <FormItem>
              <FormLabel>unaVezCada</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="totalDePuestosDeTrabajo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>totalDePuestosDeTrabajo</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="totalDeSillas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>totalDeSillas</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cocinaUOffice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>cocinaUOffice</FormLabel>
              <FormControl>
                <Switch
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cocinaUOfficeNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>cocinaUOfficeNumber</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="limpiarVajillas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>limpiarVajillas</FormLabel>
              <FormControl>
                <Switch
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cuartosDeBano"
          render={({ field }) => (
            <FormItem>
              <FormLabel>cuartosDeBano</FormLabel>
              <FormControl>
                <Switch
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cuartosDeBanoNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>cuartosDeBanoNumber</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="observaciones"
          render={({ field }) => (
            <FormItem>
              <FormLabel>observaciones</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Next Step</Button>
      </form>
    </Form>
  );
};

export default FormOne;