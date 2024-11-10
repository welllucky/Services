import { Event, Ticket, User } from "@/server/entities";
import { ITicketEvent } from "@/types";
import { DataSource, EntityTarget, Repository } from "typeorm";

class EventRepository {
  private readonly source: Repository<Event>;

  constructor(db: DataSource, EventModel: EntityTarget<Event>) {
    this.source = db.getRepository(EventModel);
  }

  findEventById(eventId: string) {
    return this.source.findOneBy({
      id: eventId,
    });
  }

  findEventsByUserId(userId: string) {
    return this.source.findBy({
      createdBy: {
        register: userId,
      },
    });
  }

  async createEvent(
    eventData: Omit<ITicketEvent, "id" | "createdBy">,
    user: User,
    ticket?: Ticket,
  ) {
    return this.source.create({
      ...eventData,
      ...(ticket && { ticket }),
      createdBy: user,
      createdAt: new Date(),
    });
  }

  findPublicEventsByTicketId(ticketId: string) {
    return this.source.find({
      where: { ticket: { id: ticketId }, visibility: "public" },
    });
  }

  findAllEventsByTicketId(ticketId: string) {
    return this.source.find({
      where: { ticket: { id: ticketId } },
    });
  }

  countEventsByTicketId(ticketId: string) {
    return this.source.count({ where: { createdBy: { id: ticketId } } });
  }
}

export { EventRepository };
