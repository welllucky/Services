import { Event, Ticket, User } from "@/server/entities";
import { IIssue, IOpenIssueForm, TicketFilters } from "@/types/Interfaces";
import { DataSource, EntityTarget, In, Not, Repository } from "typeorm";

class IssueRepository {
  private readonly source: Repository<Ticket>;

  constructor(db: DataSource, IssueModel: EntityTarget<Ticket>) {
    this.source = db.getRepository(IssueModel);
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
      relations: {
        updatedBy: true,
        closedBy: true,
        createdBy: true,
        resolver: true,
      },
    });
  }

  async create(data: IOpenIssueForm, user: User, event: Event) {
    const issue = this.source.create({
      ...data,
      createdBy: user,
      events: [event],
      createdAt: new Date(),
    });

    return this.source.save(issue);
  }

  async update(
    ticketId: string,
    data: Partial<
      Omit<
        IIssue,
        | "id"
        | "createdBy"
        | "order"
        | "createdAt"
        | "updatedAt"
        | "closedAt"
        | "closedBy"
        | "updatedBy"
      >
    >,
    user: User,
    event?: Event,
  ) {
    const issue = await this.source.findOneBy({
      id: ticketId,
      createdBy: { register: user.register },
    });

    if (issue) {
      return this.source.update(
        {
          id: ticketId,
          createdBy: { register: user.register },
        },
        {
          ...data,
          updatedAt: new Date(),
          updatedBy: user,
          closedBy: data.status === "closed" ? user : null,
          closedAt: data.status === "closed" ? new Date() : null,
          ...(issue.events && event && { events: [...issue.events, event] }),
        },
      );
    }

    return null;
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
