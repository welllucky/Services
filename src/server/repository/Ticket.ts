import { Ticket } from "@/server/models";
import { ITicket } from "@/types";
import {
  DataSource,
  EntityTarget,
  FindOptionsWhere,
  Repository,
} from "typeorm";

class TicketRepository {
  private source: Repository<Ticket>;

  constructor(db: DataSource, TicketModel: EntityTarget<Ticket>) {
    this.source = db.getRepository(TicketModel);
  }

  async findAll(resolverId: string, filters?: Partial<Omit<ITicket, "id">>) {
    return this.source.find({
      where: {
        resolver: {
          register: resolverId,
        },
        ...(filters as FindOptionsWhere<Ticket>),
      },
    });
  }

  async findById(resolverId: string, ticketId: string) {
    return this.source.find({
      where: {
        resolver: {
          register: resolverId,
        },
        id: ticketId,
      },
    });
  }

  async update(
    resolverId: string,
    ticketId: string,
    data: Partial<
      Omit<
        ITicket,
        | "closedAt"
        | "updateAt"
        | "createdAt"
        | "createdBy"
        | "updatedBy"
        | "closedBy"
        | "id"
      >
    >,
  ) {
    return this.source.update(
      {
        id: ticketId,
        resolver: {
          register: resolverId,
        },
      },
      {
        ...data,
        // ...(data.updatedBy && {
        //   updatedBy: { register: data.updatedBy },
        //   updatedAt: new Date(),
        // }),
        // ...(data.closedBy && {
        //   closedBy: { register: data.closedBy },
        //   closedAt: new Date(),
        // }),
      },
    );
  }
}

export { TicketRepository };
