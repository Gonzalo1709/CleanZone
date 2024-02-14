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

interface FormTwoProps {
  currentForm: string;
  setCurrentForm: Dispatch<SetStateAction<string>>;
  data: dataType;
  setData: Dispatch<SetStateAction<dataType>>;
}

const items = [
  { id: "lunes", label: "L" },
  { id: "martes", label: "M" },
  { id: "miércoles", label: "X" },
  { id: "jueves", label: "J" },
  { id: "viernes", label: "V" },
  // SA = Semanas alternas
  { id: "SA", label: "SA" },
];

const diasDeLaSemanaValues = [
  {
    label: "1 día",
    value: "1",
  },
  {
    label: "2 días",
    value: "2",
  },
  {
    label: "3 días",
    value: "3",
  },
  {
    label: "4 días",
    value: "4",
  },
  {
    label: "5 días",
    value: "5",
  },
];

const diasEnFinDeSemanaValues = [
  {
    label: "Sabado",
    value: "sabado",
  },
  {
    label: "Domingo",
    value: "domingo",
  },
];

const planDeTrabajo = [
  {
    id: "limpiezaPasilloEntrada",
    name: "Limpieza pasillo y entrada",
    items: items,
  },
  {
    id: "moqueta",
    name: "Moqueta",
    items: items,
  },
  {
    id: "fregadoDeSuelosConFregona",
    name: "Fregado de suelos con fregona",
    items: items,
  },
  {
    id: "aspiradoraSinMoqueta",
    name: "Aspiradora sin moqueta",
    items: items,
  },
  {
    id: "limpiezaDeDespachos",
    name: "Limpieza de despachos",
    items: items,
  },
  {
    id: "limpiezaDeMesasZonasDiafanas",
    name: "Limpieza de mesas zonas diafanas",
    items: items,
  },
];

const formSchema = z.object({
  diasDeLaSemana: z.string(),
  diasEnFinDeSemana: z.array(z.string()),
  limpiezaPasilloEntrada: z.array(z.string()),
  moqueta: z.array(z.string()),
  fregadoDeSuelosConFregona: z.array(z.string()),
  aspiradoraSinMoqueta: z.array(z.string()),
  limpiezaDeDespachos: z.array(z.string()),
  limpiezaDeMesasZonasDiafanas: z.array(z.string()),
});

const FormTwo: React.FC<FormTwoProps> = ({
  currentForm,
  setCurrentForm,
  data,
  setData,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      diasDeLaSemana: data.diasDeLaSemana.toString(),
      diasEnFinDeSemana: data.diasEnFinDeSemana,
      limpiezaPasilloEntrada: data.limpiezaPasilloEntrada,
      moqueta: data.moqueta,
      fregadoDeSuelosConFregona: data.fregadoDeSuelosConFregona,
      aspiradoraSinMoqueta: data.aspiradoraSinMoqueta,
      limpiezaDeDespachos: data.limpiezaDeDespachos,
      limpiezaDeMesasZonasDiafanas: data.limpiezaDeMesasZonasDiafanas,
    },
  });

  // make the goBack function save the values to the data state
  function goBack(values: z.infer<typeof formSchema>) {
    setData({
      ...data,
      diasDeLaSemana: parseInt(values.diasDeLaSemana),
      diasEnFinDeSemana: values.diasEnFinDeSemana,
      limpiezaPasilloEntrada: values.limpiezaPasilloEntrada,
      moqueta: values.moqueta,
      fregadoDeSuelosConFregona: values.fregadoDeSuelosConFregona,
      aspiradoraSinMoqueta: values.aspiradoraSinMoqueta,
      limpiezaDeDespachos: values.limpiezaDeDespachos,
      limpiezaDeMesasZonasDiafanas: values.limpiezaDeMesasZonasDiafanas,
    });
    setCurrentForm("formOne");
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setData({
      ...data,
      diasDeLaSemana: parseInt(values.diasDeLaSemana),
      diasEnFinDeSemana: values.diasEnFinDeSemana,
      limpiezaPasilloEntrada: values.limpiezaPasilloEntrada,
      moqueta: values.moqueta,
      fregadoDeSuelosConFregona: values.fregadoDeSuelosConFregona,
      aspiradoraSinMoqueta: values.aspiradoraSinMoqueta,
      limpiezaDeDespachos: values.limpiezaDeDespachos,
      limpiezaDeMesasZonasDiafanas: values.limpiezaDeMesasZonasDiafanas,
    });

    // attach branch to object
    const body = Object.assign({}, data, {
      branch: process.env.NEXT_PUBLIC_CURRENT_BRANCH,
    });

    // add new values to data state
    body["diasDeLaSemana"] = parseInt(values.diasDeLaSemana);
    (body["diasEnFinDeSemana"] = values.diasEnFinDeSemana),
      (body["limpiezaPasilloEntrada"] = values.limpiezaPasilloEntrada);
    body["moqueta"] = values.moqueta;
    body["fregadoDeSuelosConFregona"] = values.fregadoDeSuelosConFregona;
    console.log(body);

    // try {
    //   const { data, status } = await axios.post(
    //     "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/bookings",
    //     JSON.stringify(body),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //     }
    //   );
    //   console.log(status);
    //   return data;
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     console.log("error message: ", error.message);
    //     return error.message;
    //   } else {
    //     console.log("unexpected error: ", error);
    //     return "An unexpected error occurred";
    //   }
    // }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="diasDeLaSemana"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-lg font-semibold">
                  Días de la semana
                </FormLabel>
                <FormControl className="">
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-1 gap-2 flex-wrap justify-center"
                  >
                    {diasDeLaSemanaValues.map((item) => (
                      <FormItem
                        key={item.value}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={item.value}
                            className="bg-slate-500 p-2 aria-checked:bg-blue-600 rounded-full"
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <FormLabel className="text-base">Días en fin de semana</FormLabel>
          </div>
          <div className="flex items-center justify-center space-x-5">
            {diasEnFinDeSemanaValues.map((item) => (
              <FormField
                key={item.value}
                control={form.control}
                name="diasEnFinDeSemana"
                render={() => (
                  <FormItem>
                    <FormField
                      control={form.control}
                      name="diasEnFinDeSemana"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex items-center mt-[-25px]">
                            <FormControl>
                              <div className="">
                                <Checkbox
                                  className="p-2 rounded-sm bg-slate-500 aria-checked:bg-blue-600"
                                  checked={field.value?.includes(item.value)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.value,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.value
                                          )
                                        );
                                  }}
                                />
                              </div>
                            </FormControl>
                            <FormLabel className="ml-1">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <div className="mb-4 flex justify-end  font-bold text-lg">
            {items.map((item) => (
              <div key={item.id} className="ml-[19px]">
                {item.label}
              </div>
            ))}
          </div>
          {planDeTrabajo.map((entry) => (
            <FormField
              key={entry.name}
              control={form.control}
              // @ts-ignore
              name={entry.id}
              render={() => (
                <div className="flex-row">
                  <FormItem>
                    <div className="flex items-center justify-end mr-1">
                      <FormLabel className="text-base">{entry.name}</FormLabel>
                      {items.map((item) => (
                        <div key={item.id} className="">
                          <FormField
                            key={item.id}
                            control={form.control}
                            // @ts-ignore
                            name={entry.id}
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-col items-start ml-4"
                                >
                                  <FormControl>
                                    <div className="flex">
                                      <Checkbox
                                        className="p-2 rounded-sm bg-slate-500 aria-checked:bg-blue-600"
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                // @ts-ignore
                                                ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                // @ts-ignore
                                                field.value?.filter(
                                                  // @ts-ignore
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </div>
                                  </FormControl>
                                </FormItem>
                              );
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
          ))}

          <Button type="submit">Submit</Button>

          {/* Second submit button that saves the data to the state */}
          <Button type="button" onClick={form.handleSubmit(goBack)}>
            Go back
          </Button>
        </form>
      </Form>

      <br />
    </div>
  );
};

export default FormTwo;
