// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import {
  IssueStatusSchema,
  PriorityLevelsSchema,
  TicketTypeSchema,
} from "../dto";

export const ITicketSchema = z.object({
  id: z.string(),
  resume: z.string(),
  description: z.string(),
  date: z.string().or(z.date()),
  priority: PriorityLevelsSchema,
  type: TicketTypeSchema,
  status: IssueStatusSchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  closedAt: z.string().or(z.date()).nullish(),
  createdBy: z.string(),
  updatedBy: z.string(),
  closedBy: z.string().nullish(),
});

export type ITicket = z.infer<typeof ITicketSchema>;
