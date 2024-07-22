import { ITicket } from "@/assets";
import { Ticket } from "@/server/models";

class TicketRepository {
  static findAll(userId: string) {
    return Ticket.findAll({ where: { createdBy: userId } });
  }

  static findById(userId: string, ticketId: string) {
    return Ticket.findAll({ where: { createdBy: userId, id: ticketId } });
  }

  static create(userId: string, data: ITicket) {
    return Ticket.create({
      ...data,
      createdBy: userId,
      updatedBy: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static async update(
    userId: string,
    ticketId: string,
    data: Partial<ITicket>,
  ) {
    const ticket = await TicketRepository.findById(userId, ticketId);
    if (ticket) {
      return Ticket.update(
        { ...data },
        { where: { id: ticketId, createdBy: userId } },
      );
    }
    return null;
  }

  static async delete(userId: string, ticketId: string) {
    const ticket = await TicketRepository.findById(userId, ticketId);
    if (ticket) {
      return Ticket.destroy({ where: { id: ticketId, createdBy: userId } });
    }
    return null;
  }
}

export { TicketRepository };
