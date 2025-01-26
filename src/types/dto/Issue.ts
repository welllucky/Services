/* eslint-disable import/no-extraneous-dependencies */
import { z } from "zod";
import { IssueEventSchema } from "./IssueEvent";
import { PriorityLevelsSchema } from "./PriorityLevel";

export const IssueTypeSchema = z.enum([
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

export const IssueSchema = z.object({
  id: z.string(),
  resume: z.string(),
  description: z.string(),
  date: z.string(),
  historic: z.array(IssueEventSchema),
  priority: PriorityLevelsSchema,
  type: IssueTypeSchema,
  status: IssueStatusSchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  closedAt: z.string().or(z.date()).nullable(),
  createdBy: z.string(),
  updatedBy: z.string(),
  closedBy: z.string().nullable(),
});

export type IssueStatus = z.infer<typeof IssueStatusSchema>;

export type IssueType = z.infer<typeof IssueTypeSchema>;

export type IssueDto = z.infer<typeof IssueSchema>;
