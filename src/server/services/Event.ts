import { eventRepository, userRepository } from "@/server/repository";
import { EventRepository } from "@/server/repository/Event";
import { ITicketEvent } from "@/types";
import { userModel } from "../models";

export class EventServices {
  private static readonly repository: EventRepository = eventRepository;

  private static readonly userRepository = userRepository;

  static async createEvent(
    userId: string,
    ticketId: string,
    eventData: Omit<ITicketEvent, "id" | "order" | "emitterId" | "createdBy">,
  ) {
    const eventsQuantity =
      await this.repository.countEventsByTicketId(ticketId);

    await userModel.init({
      register: userId,
    });

    userModel.exists();

    return this.repository.createEvent(
      {
        ...eventData,
        order: eventsQuantity + 1,
      },
      userModel.getEntity(),
    );
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
