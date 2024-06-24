import { z } from 'zod'

export const sizes = ["SMALL", "AVERAGE", "BIG"] as const
export const sizeSchema = z.enum(sizes);
export type SizeType = z.infer<typeof sizeSchema>;
export const Size: Record<SizeType, { name: string, value: number }> = {
  SMALL: {
    name: "Pequeno",
    value: 1
  },
  AVERAGE: {
    name: "Médio",
    value: 2
  },
  BIG: {
    name: "Grande",
    value: 3
  }
}  