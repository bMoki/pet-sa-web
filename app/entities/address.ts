import { M } from 'node_modules/vite/dist/node/types.d-aGj9QkWt'
import { z } from 'zod'

export const AddressSchema = z.object({
  id: z.string().uuid(),
  numero: z.number(),
  complemento: z.string().nullable(),
  location: z.object({
    id: z.string().uuid(),
    cep: z.string(),
    logradouro: z.string(),
    bairro: z.string(),
    localidade: z.string(),
    uf: z.string()
  })
})