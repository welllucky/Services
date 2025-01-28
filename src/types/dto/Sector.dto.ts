import * as z from "zod";

export const SectorSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export type SectorDto = z.infer<typeof SectorSchema>;
