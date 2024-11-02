import { ISession } from "@/types";
import { sessionRepository } from "../repository";

class SessionService {
  private static readonly repository = sessionRepository;

  static createSession(
    sessionData: Omit<ISession, "createdAt" | "updatedAt" | "id">,
  ) {
    return this.repository.create({ ...sessionData });
  }

  static getSession(userId: string) {
    return this.repository.find(userId);
  }

  static getSessions(userId: string) {
    return this.repository.findAll(userId);
  }
}

export { SessionService };
