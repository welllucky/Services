import { TicketRepository } from "@/server/repository";
import { IOpenTicketForm, ITicket } from "@/types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";

// const TicketSchema = z.object({
//   id: z.string().or(z.number()),
//   resume: z.string(),
//   description: z.string(),
//   date: z.string().or(z.date()),
//   priority: z.enum(["low", "medium", "high"]),
//   type: z.enum(["task", "incident", "problem", "change"]),
//   status: z.enum(["notStarted", "inProgress", "blocked", "closed"]),
//   createdAt: z.string().or(z.date()),
//   updatedAt: z.string().or(z.date()),
//   closedAt: z.string().or(z.date()).nullable(),
//   createdBy: z.string().or(z.number()),
//   updatedBy: z.string().or(z.number()),
//   closedBy: z.number().or(z.string()).nullable(),
// });

const IOpenTicketFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  date: z.string(),
  type: z.enum(["task", "incident", "problem", "change"]),
});

class TicketServices {
  static async getAllTickets(userId: string) {
    return TicketRepository.findAll(userId);
  }

  static async getTicketById(userId: string, ticketId: string) {
    return TicketRepository.findById(userId, ticketId);
  }

  static async createTicket(userId: string, data: IOpenTicketForm) {
    try {
      IOpenTicketFormSchema.parse(data);

      const newTicket = await TicketRepository.create(userId, data);

      return newTicket;
    } catch (error) {
      throw new Error(`Houve um erro ao criar o chamado: ${error}`);
    }
  }

  static async updateTicket(
    userId: string,
    ticketId: string,
    data: Partial<ITicket>,
  ) {
    return TicketRepository.update(userId, ticketId, data);
  }

  static async deleteTicket(userId: string, ticketId: string) {
    return TicketRepository.delete(userId, ticketId);
  }
}

export { TicketServices };
