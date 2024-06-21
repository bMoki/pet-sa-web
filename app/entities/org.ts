import { z } from "zod";
import { AddressSchema } from "./address";

export const OrgSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  address: AddressSchema
})