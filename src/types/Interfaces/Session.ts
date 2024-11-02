import { z } from "zod";

export const ISessionSchema = z.object({
  id: z.string(),
  userId: z.string().or(z.number()),
  token: z.string(),
  expiresAt: z.string().or(z.date()),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export type ISession = z.infer<typeof ISessionSchema>;
