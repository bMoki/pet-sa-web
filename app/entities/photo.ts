import { z } from "zod";

export const PhotoSchema = z.object({
  url: z.string()
})