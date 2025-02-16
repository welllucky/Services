// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import { TicketTypeSchema } from "../dto";
import { PriorityLevelsSchema } from "../dto/PriorityLevel.dto";

export const IOpenTicketFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: PriorityLevelsSchema,
  date: z.string(),
  type: TicketTypeSchema,
});

export type IOpenTicketForm = z.infer<typeof IOpenTicketFormSchema>;
