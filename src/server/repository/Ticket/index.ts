import { Ticket } from "@/server/models";
import { IOpenTicketForm, ITicket, TicketFilters } from "@/types";
import { Op } from "sequelize";

class TicketRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  static findAll(userId: string, filters?: TicketFilters) {
    return Ticket.findAll({
      where: {
        createdBy: userId,
      },
    });
  }

  static findById(userId: string, ticketId: string) {
    return Ticket.findAll({
      where: { createdBy: userId, id: ticketId },
    });
  }

  static create(userId: string, data: IOpenTicketForm) {
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

  static async findInProgressTickets(userId: string) {
    try {
      console.log("Entrou no findInProgressTickets");
      return Ticket.findAll({
        where: { createdBy: userId, status: { [Op.not]: "closed" } },
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export { TicketRepository };
