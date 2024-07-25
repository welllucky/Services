// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";

export const ITicketEventSchema = z.object({
  id: z.string(),
  // eventOrder: z.number(),
  description: z.string(),
  date: z.string().or(z.date()),
  // ticketId: z.string(),
  // createdBy: z.number(),
});

export type ITicketEvent = z.infer<typeof ITicketEventSchema>;
