"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  limpiarDespuesDeReforma: z.boolean(),
  metrosCuadrados: z.number(),
  numeroDeDespachosIndividuales: z.number(),
  sueloDeMoqueta: z.boolean(),
  limpiezaPeriodicaDeMoqueta: z.boolean(),
  unaVezCada: z.number(),
  totalDePuestosDeTrabajo: z.number(),
  totalDeSillas: z.number(),
  cocinaUOffice: z.boolean(),
  cocinaUOfficeNumber: z.number(),
  limpiarVajillas: z.boolean(),
  cuartosDeBano: z.boolean(),
  cuartosDeBanoNumber: z.number(),
  observaciones: z.string(),
});

const FormOne = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      limpiarDespuesDeReforma: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="limpiarDespuesDeReforma"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>test</FormLabel>
              <FormControl>
                {/* <Input className="border-black" {...field} /> */}

\              </FormControl>
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
