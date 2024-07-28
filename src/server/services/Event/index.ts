import { EventRepository } from "@/server/repository";
import { ITicketEvent } from "@/types";

export class EventServices {
  static async createEvent(
    userId: string,
    ticketId: string,
    eventData: Omit<ITicketEvent, "id" | "order" | "emitterId" | "createdBy">,
  ) {
    console.log("Entrou em createEvent");
    const eventsQuantity =
      await EventRepository.countEventsByTicketId(ticketId);
    return EventRepository.createEvent({
      ...eventData,
      createdBy: Number(userId),
      emitterId: Number(ticketId),
      order: eventsQuantity + 1,
    });
  }

  static async getEventById(eventId: string) {
    return EventRepository.findEventById(eventId);
  }

  static async getEventsByUserId(userId: string) {
    return EventRepository.findEventsByUserId(userId);
  }

  static async getEventsByTicketId(ticketId: string) {
    return EventRepository.findAllEventsByTicketId(ticketId);
  }

  static async getPublicEventsByTicketId(ticketId: string) {
    return EventRepository.findPublicEventsByTicketId(ticketId);
  }
}
