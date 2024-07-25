// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import { PriorityLevelsSchema, TicketTypeSchema } from "../Dto";

export const IOpenTicketFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: PriorityLevelsSchema,
  date: z.string(),
  type: TicketTypeSchema,
});

export type IOpenTicketForm = z.infer<typeof IOpenTicketFormSchema>;
