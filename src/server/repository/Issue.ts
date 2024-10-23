import { Ticket } from "@/server/models";
import { IOpenIssueForm, IIssue, TicketFilters } from "@/types/Interfaces";
import { Op } from "sequelize";

class IssueRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  static findAll(userId: string, filters?: TicketFilters) {
    return Ticket.findAll({
      where: {
        createdBy: userId,
        ...(filters?.status && { status: filters.status }),
      },
    });
  }

  static findById(userId: string, ticketId: string) {
    return Ticket.findAll({
      where: { createdBy: userId, id: ticketId },
    });
  }

  static create(userId: string, data: IOpenIssueForm) {
    return Ticket.create({
      ...data,
      createdBy: userId,
      updatedBy: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static async update(userId: string, ticketId: string, data: Partial<IIssue>) {
    const ticket = await IssueRepository.findById(userId, ticketId);
    if (ticket) {
      return Ticket.update(
        { ...data },
        { where: { id: ticketId, createdBy: userId } },
      );
    }

    return null;
  }

  static async delete(userId: string, ticketId: string) {
    const ticket = await IssueRepository.findById(userId, ticketId);
    if (ticket) {
      return Ticket.destroy({ where: { id: ticketId, createdBy: userId } });
    }
    return null;
  }

  static async findInProgressIssues(userId: string) {
    return Ticket.findAll({
      where: { createdBy: userId, status: { [Op.not]: "closed" } },
    });
  }
}

export { IssueRepository };
