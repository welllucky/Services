// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";

export const ITicketEventSchema = z.object({
  id: z.number(),
  order: z.number(),
  emitterId: z.number(),
  createdBy: z.number(),
  title: z.string(),
  description: z.string().optional(),
  type: z.enum(["open", "close", "reopen", "message", "system"]),
  visibility: z.enum(["public", "private"]).optional(),
  // createdBy: z.number(),
});

export type ITicketEvent = z.infer<typeof ITicketEventSchema>;
