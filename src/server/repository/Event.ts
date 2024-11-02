import { Event, User } from "@/server/models";
import { ITicketEvent } from "@/types";
import { DataSource, EntityTarget, Repository } from "typeorm";

class EventRepository {
  private source: Repository<Event>;

  private userRepository: Repository<User>;

  constructor(
    db: DataSource,
    EventModel: EntityTarget<Event>,
    UserModel: EntityTarget<User>,
  ) {
    this.source = db.getRepository(EventModel);
    this.userRepository = db.getRepository(UserModel);
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

  async createEvent(eventData: Omit<ITicketEvent, "id">) {
    const user = await this.userRepository.findOneBy({
      register: eventData.createdBy,
    });
    return this.source.create({
      ...eventData,
      createdBy: {
        ...user,
      },
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
