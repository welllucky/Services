// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";

export const TicketEventSchema = z.object({
  id: z.string(),
  icon: z.string(),
  eventOrder: z.number(),
  description: z.string(),
  date: z.string().or(z.date()),
});

export type TicketEventDto = z.infer<typeof TicketEventSchema>;
