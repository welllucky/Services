import { Ticket } from "@/server/models";
import { ITicket } from "@/types";

class TicketRepository {
  static findAll(resolutorId: string, filters?: Partial<ITicket>) {
    return Ticket.findAll({
      where: {
        resolverId: resolutorId,
        ...filters,
      },
    });
  }

  static findById(resolutorId: string, ticketId: string) {
    return Ticket.findAll({
      where: {
        resolverId: resolutorId,
        id: ticketId,
      },
    });
  }

  static async update(
    resolutorId: string,
    ticketId: string,
    data: Partial<ITicket>,
  ) {
    const ticket = await TicketRepository.findById(resolutorId, ticketId);
    if (ticket) {
      return Ticket.update(
        { ...data },
        { where: { id: ticketId, resolverId: resolutorId } },
      );
    }
    return null;
  }

  static async delete(resolutorId: string, ticketId: string) {
    const ticket = await TicketRepository.findById(resolutorId, ticketId);
    if (ticket) {
      return Ticket.destroy({
        where: { id: ticketId, resolverId: resolutorId },
      });
    }
    return null;
  }
}
export { TicketRepository };
