import { z } from 'zod'

export const stages = ["PUPPY", "YOUTH", "ADULT", "MIDDLE_AGED", "SENIOR"] as const
export const stageSchema = z.enum(stages);
export type StageType = z.infer<typeof stageSchema>;
export const Stage: Record<StageType, { name: string, value: number }> = {
  PUPPY: {
    name: "Filhote",
    value: 1
  },
  YOUTH: {
    name: "Jovem",
    value: 2
  },
  ADULT: {
    name: "Adulto",
    value: 3
  },
  MIDDLE_AGED: {
    name: "Meia idade",
    value: 4
  },
  SENIOR: {
    name: "Mais velho",
    value: 5
  }
}  