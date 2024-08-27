import { IssueRepository } from "@/server/repository";
import { ITicket } from "@/types";

class IssueServices {
  static async getAllIssues(resolutorId: string) {
    return IssueRepository.findAll(resolutorId);
  }

  static async getIssueById(resolutorId: string, ticketId: string) {
    return IssueRepository.findById(resolutorId, ticketId);
  }

  static async updateIssue(
    resolutorId: string,
    ticketId: string,
    data: Partial<ITicket>,
  ) {
    return IssueRepository.update(resolutorId, ticketId, data);
  }

  static async deleteIssue(resolutorId: string, ticketId: string) {
    return IssueRepository.delete(resolutorId, ticketId);
  }

  static async findInProgressIssues(resolutorId: string) {
    return IssueRepository.findAll(resolutorId, {
      status: "inProgress",
    });
  }

  static async resolveIssue(resolutorId: string, ticketId: string) {
    return IssueRepository.update(resolutorId, ticketId, {
      status: "closed",
      closedAt: new Date(),
      closedBy: resolutorId,
    });
  }
}

export { IssueServices };
