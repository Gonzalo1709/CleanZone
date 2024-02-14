export interface dataType {
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
  }
  