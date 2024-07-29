import { Ticket } from "@/server/models";
import { ITicket, TicketDto } from "@/types";
import { dataFormatter } from "@/utils/functions/dataFormatter";

export class TicketView {
  static getTickets(ticketData: ITicket[]) {
    try {
      const newData = ticketData.map((ticket) => ({
        ...ticket,
        id: String(ticket.id),
        date: dataFormatter(ticket.date as string, true),
        createdAt: dataFormatter(ticket.createdAt as string),
        updatedAt: ticket.updatedAt,
        closedAt: ticket.closedAt ? ticket.closedAt : null,
      })) as TicketDto[];

      return newData;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Houve um erro ao formatar os dados do chamado", error);
      return null;
    }
  }

  static getTicket(ticketData: TicketDto) {
    try {
      const data = {
        ...ticketData,
        id: String(ticketData.id),
        date: dataFormatter(ticketData.date as string),
        createdAt: ticketData.createdAt,
        updatedAt: ticketData.updatedAt,
        closedAt: ticketData.closedAt ? ticketData.closedAt : null,
      } as TicketDto;

      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Houve um erro ao formatar os dados do chamado", error);
      return null;
    }
  }

  static getTicketId(ticketData: Ticket) {
    return { id: ticketData.id };
  }
}
