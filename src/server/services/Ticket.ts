import { TicketRepository } from "@/server/repository";
import { ITicket } from "@/types";

class TicketServices {
  static async getAllTickets(resolverId: string) {
    return TicketRepository.findAll(resolverId);
  }

  static async getTicketById(resolverId: string, ticketId: string) {
    return TicketRepository.findById(resolverId, ticketId);
  }

  static async updateTicket(
    resolverId: string,
    ticketId: string,
    data: Partial<ITicket>,
  ) {
    return TicketRepository.update(resolverId, ticketId, data);
  }

  static async deleteTicket(resolverId: string, ticketId: string) {
    return TicketRepository.delete(resolverId, ticketId);
  }

  static async findInProgressTickets(resolverId: string) {
    return TicketRepository.findAll(resolverId, {
      status: "inProgress",
    });
  }

  static async startTicket(resolverId: string, ticketId: string) {
    return TicketRepository.update(resolverId, ticketId, {
      status: "inProgress",
      updatedAt: new Date(),
      updatedBy: resolverId,
    });
  }

  static async resolveTicket(resolverId: string, ticketId: string) {
    return TicketRepository.update(resolverId, ticketId, {
      status: "closed",
      closedAt: new Date(),
      closedBy: resolverId,
    });
  }
}

export { TicketServices };
