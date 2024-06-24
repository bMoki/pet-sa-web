import { z } from 'zod'
import { environment } from './enums'
import { OrgSchema } from './org'
import { PhotoSchema } from './photo'
import { stageSchema } from './stage'
import { sizeSchema } from './size'
import { energySchema } from './energy'
import { independenceLevelSchema } from './independenceLevel'

export const petSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  about: z.string(),
  stage: stageSchema,
  energy_level: energySchema,
  size: sizeSchema,
  environment: z.enum(environment),
  independence_level: independenceLevelSchema,
  org: OrgSchema,
  photos: z.array(PhotoSchema),
  requirements: z.array(z.string())
})

export type Pet = z.infer<typeof petSchema>