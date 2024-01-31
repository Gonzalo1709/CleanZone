'use client'
import React from 'react'
import { z } from 'zod'

const formSchema = z.object({
  limpiarDespuesDeReforma: z.boolean(),
  metrosCuadrados: z.number(),
  numeroDeDespachosIndividuales: z.number(),
  sueloDeMoqueta: z.boolean(),
  limpiezaPeriodicaDeMoqueta: z.boolean(),
  unaVezCada: z.number()
})

const FormOne = () => {
  return (
    <div>

    </div>
  )
}

export default FormOne