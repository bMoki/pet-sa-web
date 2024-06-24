import { z } from 'zod'

export const independenceLevel = ["LOW", "AVERAGE", "HIGH"] as const
export const independenceLevelSchema = z.enum(independenceLevel);
export type IndependenceLevelType = z.infer<typeof independenceLevelSchema>;
export const IndependenceLevel: Record<IndependenceLevelType, { name: string, value: number }> = {
  LOW: {
    name: "Pouco",
    value: 1
  },
  AVERAGE: {
    name: "Médio",
    value: 2
  },
  HIGH: {
    name: "Alto",
    value: 3
  }
}  