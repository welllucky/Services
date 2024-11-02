import { issueRepository } from "@/server/repository";
import { IIssue, IOpenIssueForm, TicketFilters } from "@/types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";

const IOpenIssueFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  date: z.string(),
  type: z.enum(["task", "incident", "problem", "change"]),
});

class IssueServices {
  private static readonly repository = issueRepository;

  static async getAllIssues(userId: string, filters?: TicketFilters) {
    return this.repository.findAll(userId, {
      status: filters?.status,
    });
  }

  static async getIssueById(userId: string, ticketId: string) {
    return this.repository.findById(userId, ticketId);
  }

  static async createIssue(userId: string, data: IOpenIssueForm) {
    try {
      IOpenIssueFormSchema.parse(data);

      const newIssue = await this.repository.create(userId, data);

      if (!newIssue) {
        throw new Error("Houve um erro ao criar o chamado");
      }

      // const createdEvent = await EventServices.createEvent(
      //   userId,
      //   newIssue.id as string,
      //   {
      //     title: "Chamado criado com sucesso!",
      //     description:
      //       "Em alguns momentos seu chamado será atendido. Fique atento caso o resolutor necessite de mais informações.",
      //     type: "open",
      //   },
      // );

      // return {
      //   ...newIssue,
      //   historic: [
      //     // {
      //     //   ...createdEvent,
      //     // },
      //   ],
      // } as unknown as IssueDto;

      return newIssue;
    } catch (error) {
      throw new Error(`Houve um erro ao criar o chamado: ${error}`);
    }
  }

  static async updateIssue(
    userId: string,
    ticketId: string,
    data: Partial<IIssue>,
  ) {
    return this.repository.update(userId, ticketId, data);
  }

  static async startIssue(userId: string, ticketId: string) {
    try {
      const updatedIssues = await this.repository.update(userId, ticketId, {
        updatedAt: new Date(),
        updatedBy: userId,
        status: "inProgress",
      });

      if (!updatedIssues) {
        throw new Error("Chamado não encontrado");
      }

      // await EventServices.createEvent(userId, ticketId, {
      //   title: "O chamado foi fechado",
      //   description:
      //     "Caso sua questão não tenha sido resolvida, por favor, reabra o chamado. Depois de 3 tentativas sem sucesso, o chamado será fechado automaticamente e o supervisor notificado.",
      //   type: "close",
      // });

      return updatedIssues;
    } catch (error) {
      throw new Error(`Houve um erro ao atualizar o chamado: ${error}`);
    }
  }

  static async reopenIssue(userId: string, ticketId: string) {
    try {
      const updatedIssues = await this.repository.update(userId, ticketId, {
        updatedAt: new Date(),
        updatedBy: userId,
        status: "inProgress",
      });

      if (!updatedIssues) {
        throw new Error("Chamado não encontrado");
      }

      // await EventServices.createEvent(userId, ticketId, {
      //   title: "O chamado foi fechado",
      //   description:
      //     "Caso sua questão não tenha sido resolvida, por favor, reabra o chamado. Depois de 3 tentativas sem sucesso, o chamado será fechado automaticamente e o supervisor notificado.",
      //   type: "close",
      // });

      return updatedIssues;
    } catch (error) {
      throw new Error(`Houve um erro ao reabrir o chamado: ${error}`);
    }
  }

  static async closeIssue(userId: string, ticketId: string) {
    try {
      const updatedIssues = await this.repository.update(userId, ticketId, {
        closedAt: new Date(),
        status: "closed",
        closedBy: userId,
      });

      if (!updatedIssues) {
        throw new Error("Chamado não encontrado");
      }

      // await EventServices.createEvent(userId, ticketId, {
      //   title: "O chamado foi fechado",
      //   description:
      //     "Caso sua questão não tenha sido resolvida, por favor, reabra o chamado. Depois de 3 tentativas sem sucesso, o chamado será fechado automaticamente e o supervisor notificado.",
      //   type: "close",
      // });

      return updatedIssues;
    } catch (error) {
      throw new Error(`Houve um erro ao fechar o chamado: ${error}`);
    }
  }

  static async getInProgressIssues(userId: string) {
    try {
      return await this.repository.findInProgressIssues(userId);
    } catch (error) {
      throw new Error(
        `Houve um erro ao buscar os chamados em andamento: ${error}`,
      );
    }
  }
}

export { IssueServices };
