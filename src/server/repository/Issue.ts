import AppDataSource from "@/database";
import { Event, Ticket, User } from "@/server/models";
import { IIssue, IOpenIssueForm, TicketFilters } from "@/types/Interfaces";
import { DataSource, EntityTarget, In, Not, Repository } from "typeorm";

class IssueRepository {
  private source: Repository<Ticket>;

  private userRepository: Repository<User>;

  private eventRepository: Repository<Event>;

  constructor(
    db: DataSource,
    IssueModel: EntityTarget<Ticket>,
    EventModel: EntityTarget<Event>,
    UserModel: EntityTarget<User>,
  ) {
    this.source = db.getRepository(IssueModel);
    this.eventRepository = db.getRepository(EventModel);
    this.userRepository = db.getRepository(UserModel);
  }

  findAll(userId: string, filters?: TicketFilters) {
    return this.source.find({
      where: {
        createdBy: {
          register: userId,
        },
        ...(filters?.status && { status: In(filters.status) }),
      },
    });
  }

  findById(userId: string, ticketId: string) {
    return this.source.find({
      where: {
        createdBy: {
          register: userId,
        },
        id: ticketId,
      },
    });
  }

  async create(userId: string, data: IOpenIssueForm) {
    const user = await this.userRepository.findOne({
      where: { register: userId },
    });
    const event = this.eventRepository.create({
      createdAt: new Date(),
      description: "Ticket created",
      createdBy: {
        ...user,
      },
      type: "open",
      visibility: "public",
    });

    if (user) {
      const issue = this.source.create({
        ...data,
        createdBy: user,
        events: [event],
        createdAt: new Date(),
      });

      return this.source.save(issue);
    }

    return null;
  }

  async update(userId: string, ticketId: string, data: Partial<IIssue>) {
    const user = await this.userRepository.findOne({
      where: { register: userId },
    });
    return AppDataSource.createQueryBuilder()
      .update(Ticket)
      .set({ ...data, updatedAt: new Date(), updatedBy: user })
      .where(
        "id = :ticketId AND (createdBy.register = :userId OR resolver.register = :userId)",
        { ticketId, userId },
      )
      .execute();
  }

  async delete(userId: string, ticketId: string) {
    const issue = await this.source.findOneBy({
      id: ticketId,
      createdBy: { register: userId },
    });

    if (issue) {
      return this.source.softRemove(issue);
    }

    return null;
  }

  async findInProgressIssues(userId: string) {
    return this.source.find({
      where: { createdBy: { register: userId }, status: Not("closed") },
    });
  }
}

export { IssueRepository };
