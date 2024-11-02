import { ticketRepository } from "@/server/repository";
import { ITicket } from "@/types";

class TicketServices {
  private static readonly repository = ticketRepository;

  static async getAllTickets(resolverId: string) {
    return this.repository.findAll(resolverId);
  }

  static async getTicketById(resolverId: string, ticketId: string) {
    return this.repository.findById(resolverId, ticketId);
  }

  static async updateTicket(
    resolverId: string,
    ticketId: string,
    data: Partial<ITicket>,
  ) {
    return this.repository.update(resolverId, ticketId, data);
  }

  static async findInProgressTickets(resolverId: string) {
    return this.repository.findAll(resolverId, {
      status: "inProgress",
    });
  }

  static async startTicket(resolverId: string, ticketId: string) {
    return this.repository.update(resolverId, ticketId, {
      status: "inProgress",
      updatedAt: new Date(),
      // updatedBy: resolverId,
    });
  }

  static async resolveTicket(resolverId: string, ticketId: string) {
    return this.repository.update(resolverId, ticketId, {
      status: "closed",
      // closedBy: resolverId,
    });
  }
}

export { TicketServices };
