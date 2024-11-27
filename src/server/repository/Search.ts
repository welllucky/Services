import { Ticket } from "@/server/entities";
import { DataSource, EntityTarget, Like, Repository } from "typeorm";

class SearchRepository {
  private source: Repository<Ticket>;

  constructor(db: DataSource, IssueModel: EntityTarget<Ticket>) {
    this.source = db.getRepository(IssueModel);
  }

  searchTickets(userId: string, searchTerm: string) {
    return this.source.find({
      where: [
        {
          description: Like(`%${searchTerm}%`),
          createdBy: { register: userId },
        },
        {
          resume: Like(`%${searchTerm}%`),
          createdBy: { register: userId },
        },
        {
          id: Like(`%${searchTerm}%`),
          createdBy: { register: userId },
        },
        {
          description: Like(`%${searchTerm}%`),
          resolver: { register: userId },
        },
        {
          resume: Like(`%${searchTerm}%`),
          resolver: { register: userId },
        },
        {
          id: Like(`%${searchTerm}%`),
          resolver: { register: userId },
        },
      ],
    });
  }
}

export { SearchRepository };
