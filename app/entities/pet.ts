import { z } from 'zod'
import { energy, environment, independenceLevel, sizes, stages } from './enums'
import { OrgSchema } from './org'
import { PhotoSchema } from './photo'

export const petSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  about: z.string(),
  stage: z.enum(stages),
  energy_level: z.enum(energy),
  size: z.enum(sizes),
  environment: z.enum(environment),
  independence_level: z.enum(independenceLevel),
  org: OrgSchema,
  photos: z.array(PhotoSchema)
})

export type Pet = z.infer<typeof petSchema>