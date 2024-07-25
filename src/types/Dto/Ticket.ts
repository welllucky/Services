/* eslint-disable import/no-extraneous-dependencies */
import { z } from "zod";
import { TicketEventSchema } from "./TicketEvent";

export const PriorityLevelsSchema = z.enum(["low", "medium", "high"]);

export const TicketTypeSchema = z.enum([
  "task",
  "incident",
  "problem",
  "change",
]);

export const IssueStatusSchema = z.enum([
  "notStarted",
  "inProgress",
  "blocked",
  "closed",
]);

export const TicketSchema = z.object({
  id: z.string(),
  resume: z.string(),
  description: z.string(),
  date: z.string(),
  historic: z.array(TicketEventSchema),
  priority: PriorityLevelsSchema,
  type: TicketTypeSchema,
  status: IssueStatusSchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  closedAt: z.string().or(z.date()).nullable(),
  createdBy: z.number(),
  updatedBy: z.number(),
  closedBy: z.number().nullable(),
});

export type IssueStatus = z.infer<typeof IssueStatusSchema>;

export type TicketType = z.infer<typeof TicketTypeSchema>;

export type PriorityLevels = z.infer<typeof PriorityLevelsSchema>;

export type TicketDto = z.infer<typeof TicketSchema>;
