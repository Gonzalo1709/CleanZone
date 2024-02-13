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
    limpiezaPasilloEntrada: Array<string>;
    moqueta: Array<string>;
    fregadoDeSuelosConFregona: Array<string>;
  }
  