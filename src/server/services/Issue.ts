import {
  eventRepository,
  issueRepository,
  userRepository,
} from "@/server/repository";
import { IIssue, IIssueSchema, IOpenIssueForm, TicketFilters } from "@/types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from "zod";
import { userModel } from "../models";

const IOpenIssueFormSchema = z.object({
  resume: z.string(),
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  date: z.string(),
  type: z.enum(["task", "incident", "problem", "change"]),
});

class IssueServices {
  private static readonly repository = issueRepository;

  private static readonly userRepository = userRepository;

  private static readonly eventRepository = eventRepository;

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

      await userModel.init({
        register: userId,
      });

      const event = await this.eventRepository.createEvent(
        {
          description:
            "A solution specialist will soon resolve your issue. Stay tuned for messages.",
          title: "Ticket created",
          type: "open",
          visibility: "public",
          order: 1,
        },
        userModel.getEntity(),
      );

      const newIssue = await this.repository.create(
        data,
        userModel.getEntity(),
        event,
      );

      if (!newIssue) throw new Error();

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
    try {
      IIssueSchema.parse(data);

      await userModel.init({
        register: userId,
      });

      return this.repository.update(ticketId, data, userModel.getEntity());
    } catch (error) {
      throw new Error(`Houve um erro ao atualizar o chamado: ${error}`);
    }
  }

  static async startIssue(userId: string, ticketId: string) {
    try {
      await userModel.init({
        register: userId,
      });

      const issue = await this.repository.update(
        ticketId,
        {
          status: "inProgress",
        },
        userModel.getEntity(),
      );

      if (!issue) {
        throw new Error("Chamado não encontrado");
      }

      return issue;
    } catch (error) {
      throw new Error(`Houve um erro ao iniciar o chamado: ${error}`);
    }
  }

  static async reopenIssue(userId: string, ticketId: string) {
    try {
      await userModel.init({
        register: userId,
      });

      const updatedIssues = await this.repository.update(
        ticketId,
        {
          status: "inProgress",
        },
        userModel.getEntity(),
      );

      if (!updatedIssues) {
        throw new Error("Chamado não encontrado");
      }

      return updatedIssues;
    } catch (error) {
      throw new Error(`Houve um erro ao reabrir o chamado: ${error}`);
    }
  }

  static async closeIssue(userId: string, ticketId: string) {
    try {
      await userModel.init({
        register: userId,
      });

      const updatedIssues = await this.repository.update(
        ticketId,
        {
          status: "closed",
        },
        userModel.getEntity(),
      );

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
