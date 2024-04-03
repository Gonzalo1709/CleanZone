"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";

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
import { Textarea } from "@/components/ui/textarea";

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
      // Second Form:
      diasDeLaSemana: data.diasDeLaSemana,
      diasEnFinDeSemana: data.diasEnFinDeSemana,
      limpiezaPasilloEntrada: data.limpiezaPasilloEntrada,
      moqueta: data.moqueta,
      fregadoDeSuelosConFregona: data.fregadoDeSuelosConFregona,
      aspiradoraSinMoqueta: data.aspiradoraSinMoqueta,
      limpiezaDeDespachos: data.limpiezaDeDespachos,
      limpiezaDeMesasZonasDiafanas: data.limpiezaDeMesasZonasDiafanas,
      limpiezaDeSillas: data.limpiezaDeSillas,
      limpiezaDeTelefonos: data.limpiezaDeTelefonos,
      LimpiezaDeCocinas: data.LimpiezaDeCocinas,
      limpiezaDeVajillas: data.limpiezaDeVajillas,
      limpiezaDeCuartosDeBano: data.limpiezaDeCuartosDeBano,
      // Third Form:
      nombreEmpresa: data.nombreEmpresa,
      direccion: data.direccion,
      codigoPostal: data.codigoPostal,
      personaContacto: data.personaContacto,
      telefonoContacto: data.telefonoContacto,
      email: data.email,
    });

    setCurrentForm("formTwo");
  }

  const switchStyle =
    "data-[state=checked]:bg-green-300 data-[state=unchecked]:bg-red-600 h-10 w-28";
  const inputStyle =
    "border-2 w-20 h-9 mx-auto text-center text-xl rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="limpiarDespuesDeReforma"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                ¿Es necesario limpiar después de la reforma? <br />
              </FormLabel>
              <FormControl className="">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={field.value}
                    onChange={field.onChange}
                    // {...field}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="metrosCuadrados"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-lg">Metros Cuadrados</FormLabel>
              <FormControl className="">
                <Input className={inputStyle} type="number" {...field} />
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
              <FormLabel className="text-lg">
                Número de despachos individuales
              </FormLabel>
              <FormControl>
                <Input type="number" className={inputStyle} {...field} />
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
              <FormLabel className="text-lg">
                ¿El suelo es de moqueta? <br />
              </FormLabel>
              <FormControl>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={field.value}
                    onChange={field.onChange}
                    // {...field}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
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
              <FormLabel className="text-lg">
                Limpieza periódica de moqueta: <br />
              </FormLabel>
              <FormControl>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={field.value}
                    onChange={field.onChange}
                    // {...field}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
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
              <FormLabel className="text-lg">Una vez cada</FormLabel>
              <FormControl>
                <Input type="number" className={inputStyle} {...field} />
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
              <FormLabel className="text-lg">
                Número total de puestos de trabajo
              </FormLabel>
              <FormControl>
                <Input type="number" className={inputStyle} {...field} />
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
              <FormLabel className="text-lg">Número total de sillas</FormLabel>
              <FormControl>
                <Input type="number" className={inputStyle} {...field} />
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
              <FormLabel className="text-lg">
                ¿Tiene cocina u office? <br />
              </FormLabel>
              <FormControl>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={field.value}
                    onChange={field.onChange}
                    // {...field}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
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
              <FormControl>
                <Input type="number" className={inputStyle} {...field} />
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
              <FormLabel className="text-lg">
                ¿Es necesario limpiar vajillas? <br />
              </FormLabel>
              <FormControl>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={field.value}
                    onChange={field.onChange}
                    // {...field}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
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
              <FormLabel className="text-lg">
                ¿Tiene cuartos de baño? <br />
              </FormLabel>
              <FormControl>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={field.value}
                    onChange={field.onChange}
                    // {...field}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
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
              <FormControl>
                <Input type="number" className={inputStyle} {...field} />
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
              <FormLabel className="text-lg">Observaciones</FormLabel>
              <FormControl>
                <Textarea {...field} />
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
