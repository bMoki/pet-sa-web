import { z } from 'zod'

export const energy = ["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"] as const
export const energySchema = z.enum(energy);
export type EnergyType = z.infer<typeof energySchema>;
export const Energy: Record<EnergyType, { name: string, value: number }> = {
  VERY_LOW: {
    name: "Muita pouca",
    value: 1
  },
  LOW: {
    name: "Pouca",
    value: 2
  },
  MEDIUM: {
    name: "Média",
    value: 3
  },
  HIGH: {
    name: "Alta",
    value: 4
  },
  VERY_HIGH: {
    name: "Muita alta",
    value: 5
  }
}  