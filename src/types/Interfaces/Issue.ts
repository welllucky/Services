// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import { IssueStatusSchema, IssueTypeSchema } from "../dto";
import { PriorityLevelsSchema } from "../dto/PriorityLevel.dto";

export const IIssueSchema = z.object({
  id: z.string(),
  resume: z.string(),
  description: z.string(),
  date: z.string().or(z.date()),
  priority: PriorityLevelsSchema,
  type: IssueTypeSchema,
  status: IssueStatusSchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  closedAt: z.string().or(z.date()).nullish(),
  createdBy: z.string(),
  updatedBy: z.string(),
  closedBy: z.number().nullish(),
});

export type IIssue = z.infer<typeof IIssueSchema>;
