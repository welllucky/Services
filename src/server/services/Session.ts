import { ISession } from "@/types";
import { SessionRepository } from "../repository/Session";

class SessionService {
  static createSession(sessionData: Omit<ISession, "createdAt" | "updatedAt" | "id">) {
    return SessionRepository.create({ ...sessionData });
  }

  static getSession(userId: string) {
    return SessionRepository.find(userId);
  }

  static getSessions(userId: string) {
    return SessionRepository.findAll(userId);
  }
}

export { SessionService };
