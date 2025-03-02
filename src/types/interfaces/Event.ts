// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";

export const IEventSchema = z.object({
  id: z.string(),
  order: z.number(),
  createdBy: z.string(),
  title: z.string(),
  description: z.string().optional(),
  type: z.enum(["open", "close", "reopen", "message", "system"]),
  visibility: z.enum(["public", "private"]).optional(),
});

export type ITicketEvent = z.infer<typeof IEventSchema>;
