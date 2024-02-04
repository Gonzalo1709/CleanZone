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

const formSchema = z.object({
  limpiarDespuesDeReforma: z.boolean(),
  metrosCuadrados: z.coerce.number(),
  // numeroDeDespachosIndividuales: z.number(),
  // sueloDeMoqueta: z.boolean(),
  // limpiezaPeriodicaDeMoqueta: z.boolean(),
  // unaVezCada: z.number(),
  // totalDePuestosDeTrabajo: z.number(),
  // totalDeSillas: z.number(),
  // cocinaUOffice: z.boolean(),
  // cocinaUOfficeNumber: z.number(),
  // limpiarVajillas: z.boolean(),
  // cuartosDeBano: z.boolean(),
  // cuartosDeBanoNumber: z.number(),
  // observaciones: z.string(),
});

interface dataType {
  limpiarDespuesDeReforma: boolean;
  metrosCuadrados: number;
}

const FormOne = () => {
  const [data, setData] = useState<dataType>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // limpiarDespuesDeReforma: false,
      metrosCuadrados: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setData({
      limpiarDespuesDeReforma: values.limpiarDespuesDeReforma,
      metrosCuadrados: values.metrosCuadrados,
    });
    console.log({data});
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

        <Button type="submit">Next Step</Button>
      </form>
    </Form>
  );
};

export default FormOne;
