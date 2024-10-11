import { Ticket } from "@/server/models";
import { Op } from "sequelize";

class SearchRepository {
  static searchTickets(userId: string, searchTerm: string) {
    return Ticket.findAll({
      where: {
        [Op.and]: [
          {
            [Op.or]: [
              { description: { [Op.like]: `%${searchTerm}%` } },
              { resume: { [Op.like]: `%${searchTerm}%` } },
              { id: { [Op.like]: `%${searchTerm}%` } },
            ],
          },
          {
            [Op.or]: [{ createdBy: userId }, { resolverId: userId }],
          },
        ],
      },
    });
  }
}

export { SearchRepository };
