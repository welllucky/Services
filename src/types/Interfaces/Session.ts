import { z } from "zod";

export const ISessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  token: z.string(),
  isActive: z.boolean(),
  expiresAt: z.string().or(z.date()),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export const SessionResponseSchema = z.object({
  token: z.string(),
  expiresAt: z.string().or(z.date()),
});

export type ISession = z.infer<typeof ISessionSchema>;

export type ISessionResponse = z.infer<typeof SessionResponseSchema>;
