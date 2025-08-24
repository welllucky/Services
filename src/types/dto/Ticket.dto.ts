/* eslint-disable import/no-extraneous-dependencies */
import { z } from "zod";

import { PriorityLevelsSchema } from "./PriorityLevel.dto";
import { TicketEventSchema } from "./TicketEvent.dto";

export const TicketTypeSchema = z.enum([
  "task",
  "incident",
  "problem",
  "change",
  "",
]);

export const TicketStatusSchema = z.enum([
  "notStarted",
  "inProgress",
  "blocked",
  "closed",
  "",
]);

export const TicketSchema = z.object({
  id: z.string(),
  resume: z.string(),
  description: z.string(),
  date: z.string(),
  historic: z.array(TicketEventSchema),
  priority: PriorityLevelsSchema,
  type: TicketTypeSchema,
  status: TicketStatusSchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  closedAt: z.string().or(z.date()).nullable(),
  createdBy: z.string(),
  updatedBy: z.string(),
  closedBy: z.string().nullable(),
});

export type TicketStatus = z.infer<typeof TicketStatusSchema>;

export type TicketType = z.infer<typeof TicketTypeSchema>;

export type TicketDto = z.infer<typeof TicketSchema>;

export type CreatedTicketDto = Omit<TicketDto, "id">;
