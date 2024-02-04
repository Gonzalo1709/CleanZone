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
  });

  return (
    <div>
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
  );
};

export default CalculatePricePage;
