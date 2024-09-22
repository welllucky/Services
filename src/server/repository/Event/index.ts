import { Event } from "@/server/models";

import { ITicketEvent } from "@/types";

class EventRepository {
  static findEventById(eventId: string) {
    return Event.findByPk(eventId);
  }

  static findEventsByUserId(userId: string) {
    return Event.findAll({ where: { createdBy: userId } });
  }

  static createEvent(eventData: Omit<ITicketEvent, "id">) {
    return Event.create(eventData);
  }

  static findPublicEventsByTicketId(ticketId: string) {
    return Event.findAll({
      where: { emitterId: ticketId, visibility: "public" },
    });
  }

  static findAllEventsByTicketId(ticketId: string) {
    return Event.findAll({
      where: { emitterId: ticketId },
    });
  }

  static countEventsByTicketId(ticketId: string) {
    return Event.count({ where: { emitterId: ticketId } });
  }
}

export { EventRepository };
