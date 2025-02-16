// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import { IssueTypeSchema } from "../dto";
import { PriorityLevelsSchema } from "../dto/PriorityLevel.dto";

export const IOpenTicketFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: PriorityLevelsSchema,
  date: z.string(),
  type: IssueTypeSchema,
});

export type IOpenTicketForm = z.infer<typeof IOpenTicketFormSchema>;
