import { ITicket } from "@/assets";
import { TicketRepository } from "@/server/repository";

class TicketServices {
  static async getAllTickets(userId: string) {
    return TicketRepository.findAll(userId);
  }

  static async getTicketById(userId: string, ticketId: string) {
    return TicketRepository.findById(userId, ticketId);
  }

  static async createTicket(userId: string, data: ITicket) {
    return TicketRepository.create(userId, data);
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
