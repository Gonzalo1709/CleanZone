"use client";

import React, { useState } from "react";
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

const FormOne = () => {
  const [data, setData] = useState<dataType>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      limpiarDespuesDeReforma: false,
      metrosCuadrados: 0,
      numeroDeDespachosIndividuales: 0,
      sueloDeMoqueta: false,
      limpiezaPeriodicaDeMoqueta: false,
      unaVezCada: 0,
      totalDePuestosDeTrabajo: 0,
      totalDeSillas: 0,
      cocinaUOffice: false,
      cocinaUOfficeNumber: 0,
      limpiarVajillas: false,
      cuartosDeBano: false,
      cuartosDeBanoNumber: 0,
      observaciones: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
    // console.log({ data });
    console.log(values);
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
