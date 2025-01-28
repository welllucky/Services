import * as z from "zod";

export const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export type RoleDto = z.infer<typeof RoleSchema>;
