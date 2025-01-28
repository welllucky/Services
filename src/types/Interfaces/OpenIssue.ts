// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import { IssueTypeSchema } from "../dto";
import { PriorityLevelsSchema } from "../dto/PriorityLevel.dto";

export const IOpenIssueFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: PriorityLevelsSchema,
  date: z.string(),
  type: IssueTypeSchema,
});

export type IOpenIssueForm = z.infer<typeof IOpenIssueFormSchema>;
