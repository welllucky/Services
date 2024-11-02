import { eventRepository } from "@/server/repository";
import { EventRepository } from "@/server/repository/Event";
import { ITicketEvent } from "@/types";

export class EventServices {
  private static readonly repository: EventRepository = eventRepository;

  static async createEvent(
    userId: string,
    ticketId: string,
    eventData: Omit<ITicketEvent, "id" | "order" | "emitterId" | "createdBy">,
  ) {
    const eventsQuantity =
      await this.repository.countEventsByTicketId(ticketId);
    return this.repository.createEvent({
      ...eventData,
      createdBy: userId,
      order: eventsQuantity + 1,
    });
  }

  static async getEventById(eventId: string) {
    return this.repository.findEventById(eventId);
  }

  static async getEventsByUserId(userId: string) {
    return this.repository.findEventsByUserId(userId);
  }

  static async getEventsByTicketId(ticketId: string) {
    return this.repository.findAllEventsByTicketId(ticketId);
  }

  static async getPublicEventsByTicketId(ticketId: string) {
    return this.repository.findPublicEventsByTicketId(ticketId);
  }
}
