import { TicketRepository } from "@/server/repository";
import { IOpenTicketForm, ITicket, TicketFilters } from "@/types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";

// const TicketSchema = z.object({
//   id: z.string().or(z.number()),
//   resume: z.string(),
//   description: z.string(),
//   date: z.string().or(z.date()),
//   priority: z.enum(["low", "medium", "high"]),
//   type: z.enum(["task", "incident", "problem", "change"]),
//   status: z.enum(["notStarted", "inProgress", "blocked", "closed"]),
//   createdAt: z.string().or(z.date()),
//   updatedAt: z.string().or(z.date()),
//   closedAt: z.string().or(z.date()).nullable(),
//   createdBy: z.string().or(z.number()),
//   updatedBy: z.string().or(z.number()),
//   closedBy: z.number().or(z.string()).nullable(),
// });

const IOpenTicketFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  date: z.string(),
  type: z.enum(["task", "incident", "problem", "change"]),
});

class TicketServices {
  static async getAllTickets(userId: string, filters?: TicketFilters) {
    return TicketRepository.findAll(userId, {
      status: filters?.status,
    });
  }

  static async getTicketById(userId: string, ticketId: string) {
    return TicketRepository.findById(userId, ticketId);
  }

  static async createTicket(userId: string, data: IOpenTicketForm) {
    try {
      IOpenTicketFormSchema.parse(data);

      const newTicket = await TicketRepository.create(userId, data);

      if (!newTicket) {
        throw new Error("Houve um erro ao criar o chamado");
      }

      // const createdEvent = await EventServices.createEvent(
      //   userId,
      //   newTicket.id as string,
      //   {
      //     title: "Chamado criado com sucesso!",
      //     description:
      //       "Em alguns momentos seu chamado será atendido. Fique atento caso o resolutor necessite de mais informações.",
      //     type: "open",
      //   },
      // );

      // return {
      //   ...newTicket,
      //   historic: [
      //     // {
      //     //   ...createdEvent,
      //     // },
      //   ],
      // } as unknown as TicketDto;

      return newTicket;
    } catch (error) {
      console.log(error);
      throw new Error(`Houve um erro ao criar o chamado: ${error}`);
    }
  }

  static async updateTicket(
    userId: string,
    ticketId: string,
    data: Partial<ITicket>,
  ) {
    return TicketRepository.update(userId, ticketId, data);
  }

  static async startTicket(userId: string, ticketId: string) {
    try {
      const updatedTickets = await TicketRepository.update(userId, ticketId, {
        updatedAt: new Date(),
        updatedBy: userId,
        status: "inProgress",
      });

      if (!updatedTickets) {
        throw new Error("Chamado não encontrado");
      }

      // await EventServices.createEvent(userId, ticketId, {
      //   title: "O chamado foi fechado",
      //   description:
      //     "Caso sua questão não tenha sido resolvida, por favor, reabra o chamado. Depois de 3 tentativas sem sucesso, o chamado será fechado automaticamente e o supervisor notificado.",
      //   type: "close",
      // });

      return updatedTickets;
    } catch (error) {
      throw new Error(`Houve um erro ao atualizar o chamado: ${error}`);
    }
  }

  static async reopenTicket(userId: string, ticketId: string) {
    try {
      const updatedTickets = await TicketRepository.update(userId, ticketId, {
        updatedAt: new Date(),
        updatedBy: userId,
        status: "inProgress",
      });

      if (!updatedTickets) {
        throw new Error("Chamado não encontrado");
      }

      // await EventServices.createEvent(userId, ticketId, {
      //   title: "O chamado foi fechado",
      //   description:
      //     "Caso sua questão não tenha sido resolvida, por favor, reabra o chamado. Depois de 3 tentativas sem sucesso, o chamado será fechado automaticamente e o supervisor notificado.",
      //   type: "close",
      // });

      return updatedTickets;
    } catch (error) {
      throw new Error(`Houve um erro ao reabrir o chamado: ${error}`);
    }
  }

  static async closeTicket(userId: string, ticketId: string) {
    try {
      const updatedTickets = await TicketRepository.update(userId, ticketId, {
        closedAt: new Date(),
        status: "closed",
        closedBy: userId,
      });

      if (!updatedTickets) {
        console.log("Chamado não encontrado");
        throw new Error("Chamado não encontrado");
      }

      // await EventServices.createEvent(userId, ticketId, {
      //   title: "O chamado foi fechado",
      //   description:
      //     "Caso sua questão não tenha sido resolvida, por favor, reabra o chamado. Depois de 3 tentativas sem sucesso, o chamado será fechado automaticamente e o supervisor notificado.",
      //   type: "close",
      // });

      return updatedTickets;
    } catch (error) {
      console.log(error);
      throw new Error(`Houve um erro ao fechar o chamado: ${error}`);
    }
  }

  static async getInProgressTickets(userId: string) {
    try {
      console.log("Entrou no getInProgressTickets");
      return TicketRepository.findInProgressTickets(userId);
    } catch (error) {
      console.log(error);
      throw new Error(
        `Houve um erro ao buscar os chamados em andamento: ${error}`,
      );
    }
  }
}

export { TicketServices };
