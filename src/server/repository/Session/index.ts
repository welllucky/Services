import { Session } from "@/server/models/Session";
import { ISession } from "@/types";

class SessionRepository {
  static find(userId: string) {
    return Session.findOne({
      where: {
        userId,
      },
    });
  }

  static findAll(userId: string) {
    return Session.findAll({
      where: {
        userId,
      },
    });
  }

  static async update(userId: string, data: Omit<Partial<ISession>, "userId">) {
    return Session.update({ ...data }, { where: { userId }, limit: 1 });
  }

  static async create(data: Omit<ISession, "createdAt" | "updatedAt" | "id">) {
    return Session.create({
      ...data,
    });
  }
}

export { SessionRepository };
