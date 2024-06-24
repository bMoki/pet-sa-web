import { M } from 'node_modules/vite/dist/node/types.d-aGj9QkWt'
import { z } from 'zod'

export const AddressSchema = z.object({
  id: z.string().uuid(),
  numero: z.number(),
  complemento: z.string().optional(),
  location: z.object({
    id: z.string().uuid(),
    cep: z.string(),
    bairro: z.string(),
    localidade: z.string(),
    cidade: z.string(),
    uf: z.string()
  })
})