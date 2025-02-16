import { z } from "zod";
import { TicketStatusSchema, TicketTypeSchema } from "../dto";
import { PriorityLevelsSchema } from "../dto/PriorityLevel.dto";

export const ITicketSchema = z.object({
  id: z.string(),
  resume: z.string(),
  description: z.string(),
  date: z.string().or(z.date()),
  priority: PriorityLevelsSchema,
  type: TicketTypeSchema,
  status: TicketStatusSchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  closedAt: z.string().or(z.date()).nullish(),
  createdBy: z.string(),
  updatedBy: z.string(),
  closedBy: z.number().nullish(),
});

export type ITicket = z.infer<typeof ITicketSchema>;
