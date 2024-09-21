import { IssueRepository } from "@/server/repository";
import { IIssue } from "@/types";

class IssueServices {
  static async getAllIssues(resolverId: string) {
    return IssueRepository.findAll(resolverId);
  }

  static async getIssueById(resolverId: string, ticketId: string) {
    return IssueRepository.findById(resolverId, ticketId);
  }

  static async updateIssue(
    resolverId: string,
    ticketId: string,
    data: Partial<IIssue>,
  ) {
    return IssueRepository.update(resolverId, ticketId, data);
  }

  static async deleteIssue(resolverId: string, ticketId: string) {
    return IssueRepository.delete(resolverId, ticketId);
  }

  static async findInProgressIssues(resolverId: string) {
    return IssueRepository.findAll(resolverId, {
      status: "inProgress",
    });
  }

  static async startIssue(resolverId: string, ticketId: string) {
    return IssueRepository.update(resolverId, ticketId, {
      status: "inProgress",
      updatedAt: new Date(),
      updatedBy: resolverId,
    });
  }

  static async resolveIssue(resolverId: string, ticketId: string) {
    return IssueRepository.update(resolverId, ticketId, {
      status: "closed",
      closedAt: new Date(),
      closedBy: resolverId,
    });
  }
}

export { IssueServices };
