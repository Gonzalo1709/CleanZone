export interface dataType {
  // first form
  limpiarDespuesDeReforma: boolean;
  metrosCuadrados: number;
  numeroDeDespachosIndividuales: number;
  sueloDeMoqueta: boolean;
  limpiezaPeriodicaDeMoqueta: boolean;
  unaVezCada: number;
  totalDePuestosDeTrabajo: number;
  totalDeSillas: number;
  cocinaUOffice: boolean;
  cocinaUOfficeNumber: number;
  limpiarVajillas: boolean;
  cuartosDeBano: boolean;
  cuartosDeBanoNumber: number;
  observaciones: string;
  // second form:
  diasDeLaSemana: number;
  diasEnFinDeSemana: Array<string>;
  limpiezaPasilloEntrada: Array<string>;
  moqueta: Array<string>;
  fregadoDeSuelosConFregona: Array<string>;
  aspiradoraSinMoqueta: Array<string>;
  limpiezaDeDespachos: Array<string>;
  limpiezaDeMesasZonasDiafanas: Array<string>;
  limpiezaDeSillas: Array<string>;
  limpiezaDeTelefonos: Array<string>;
  LimpiezaDeCocinas: Array<string>;
  limpiezaDeVajillas: Array<string>;
  limpiezaDeCuartosDeBano: Array<string>;
  // third form:
  nombreEmpresa: string;
  direccion: string;
  codigoPostal: number;
  personaContacto: string;
  telefonoContacto: number;
  email: string;
}

export const form1 = [
  {
    p: "¿Es necesario limpiar después de la reforma?",
    id: "limpiarDespuesDeReforma",
  },
  { p: "Metros Cuadrados", id: "metrosCuadrados" },
  {
    p: "Número de despachos individuales",
    id: "numeroDeDespachosIndividuales",
  },
  {
    p: "¿El suelo es de moqueta?",
    id: "sueloDeMoqueta",
  },
  {
    p: "Limpieza periódica de moqueta",
    id: "limpiezaPeriodicaDeMoqueta",
  },
  {
    p: "Una vez cada",
    id: "unaVezCada",
  },
  {
    p: "Número total de puestos de trabajo",
    id: "totalDePuestosDeTrabajo",
  },
  {
    p: "Número total de sillas",
    id: "totalDeSillas",
  },
  {
    p: "¿Tiene cocina u office?",
    id: "cocinaUOffice",
  },
  {
    p: "Cocina u office:",
    id: "cocinaUOfficeNumber",
  },
  {
    p: "¿Es necesario limpiar vajillas?",
    id: "limpiarVajillas",
  },
  {
    p: "¿Tiene cuartos de baño?",
    id: "cuartosDeBano",
  },
  {
    p: "Cuartos de baño:",
    id: "cuartosDeBanoNumber",
  },
  {
    p: "Observaciones:",
    id: "observaciones",
  },
];

export const form2 = [
  {
    p: "Días de la semana",
    id: "diasDeLaSemana",
  },
  {
    p: "Días en fin de semana",
    id: "diasEnFinDeSemana",
  },
  {
    p: "Limpieza pasillo entrada",
    id: "limpiezaPasilloEntrada",
  },
  {
    p: "Moqueta",
    id: "moqueta",
  },
  {
    p: "Fregado de suelos con fregona",
    id: "fregadoDeSuelosConFregona",
  },
  {
    p: "Aspiradora sin moqueta",
    id: "aspiradoraSinMoqueta",
  },
  {
    p: "Limpieza de despachos",
    id: "limpiezaDeDespachos",
  },
  {
    p: "Limpieza de mesas zonas diáfanass",
    id: "limpiezaDeMesasZonasDiafanas",
  },
  {
    p: "Limpieza de sillas",
    id: "limpiezaDeSillas",
  },
  {
    p: "Limpieza de teléfonos",
    id: "limpiezaDeTelefonos",
  },
  {
    p: "Limpieza de cocinas",
    id: "LimpiezaDeCocinas",
  },
  {
    p: "Limpieza de vajillas",
    id: "limpiezaDeVajillas",
  },
  {
    p: "Limpieza de cuartos de baño",
    id: "limpiezaDeCuartosDeBano",
  },
];

export const form3 = [
  {
    p: "Nombre de empresa",
    id: "nombreEmpresa",
  },
  {
    p: "Dirección",
    id: "direccion",
  },
  {
    p: "Código Postal",
    id: "codigoPostal",
  },
  {
    p: "Persona de Contacto",
    id: "personaContacto",
  },
  {
    p: "Teléfono de Contacto",
    id: "telefonoContacto",
  },
  {
    p: "Correo Electrónico",
    id: "email",
  },
];