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
];

const formSchema = z.object({
  limpiezaPasilloEntrada: z.array(z.string()),
  moqueta: z.array(z.string()),
  fregadoDeSuelosConFregona: z.array(z.string()),
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
      limpiezaPasilloEntrada: data.limpiezaPasilloEntrada,
      moqueta: data.moqueta,
      fregadoDeSuelosConFregona: data.fregadoDeSuelosConFregona,
    },
  });

  // make the goBack function save the values to the data state
  function goBack(values: z.infer<typeof formSchema>) {
    setData({
      ...data,
      limpiezaPasilloEntrada: values.limpiezaPasilloEntrada,
      moqueta: values.moqueta,
      fregadoDeSuelosConFregona: values.fregadoDeSuelosConFregona,
    });
    setCurrentForm("formOne");
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setData({
      ...data,
      limpiezaPasilloEntrada: values.limpiezaPasilloEntrada,
      moqueta: values.moqueta,
      fregadoDeSuelosConFregona: values.fregadoDeSuelosConFregona,
    });

    // attach branch to object
    const body = Object.assign({}, data, {
      branch: process.env.NEXT_PUBLIC_CURRENT_BRANCH,
    });

    // add new values to data state
    body["limpiezaPasilloEntrada"] = values.limpiezaPasilloEntrada;
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
