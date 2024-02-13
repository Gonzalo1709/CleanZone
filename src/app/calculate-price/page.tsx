"use client";

import React, { useState } from "react";
import FormOne from "./components/form1";
import { dataType } from "@/lib/form-interface";
import FormTwo from "./components/form2";

const CalculatePricePage = () => {
  const [currentForm, setCurrentForm] = useState("formOne");
  const [data, setData] = useState<dataType>({
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
    // Second Form:
    limpiezaPasilloEntrada: [],
    moqueta: [],
    fregadoDeSuelosConFregona: [],
  });

  return (
    <div className="text-center my-10  ml-auto mr-auto p-5">
      <div className="flex justify-center space-x-14">
        <div className={currentForm === "formOne" ? 'text-[#2563eb]' : ""}>
          <h1 className="text-xl font-semibold">PASO 1</h1>
          <p className="text-lg font-semibold">Inmueble</p>
        </div>
        <div className={currentForm === "formTwo" ? 'text-[#2563eb]' : ""}>
          <h1 className="text-xl font-semibold">PASO 2</h1>
          <p className="text-lg font-semibold">Servicio</p>
        </div>
        <div className={currentForm === "formThree" ? 'text-[#2563eb]' : ""}>
          <h1 className="text-xl font-semibold">PASO 3</h1>
          <p className="text-lg font-semibold">Cliente</p>
        </div>
      </div>

      <div className="my-5">
        {currentForm === "formOne" ? (
          <h1 className="text-2xl font-semibold">
            PASO 1 Información del Inmueble
          </h1>
        ) : null}
      </div>

      <div className="flex justify-center">
        <div className="border-4 rounded-lg p-4 shadow-xl bg-slate-100">
          {currentForm === "formOne" ? (
            <FormOne
              currentForm={currentForm}
              setCurrentForm={setCurrentForm}
              data={data}
              setData={setData}
            />
          ) : null}
          {currentForm === "formTwo" ? (
            <FormTwo
              currentForm={currentForm}
              setCurrentForm={setCurrentForm}
              data={data}
              setData={setData}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CalculatePricePage;
