import { Session } from "@/server/entities/Session";
import { ISession } from "@/types";
import { DataSource, EntityTarget, Repository } from "typeorm";
import { User } from "../entities";

class SessionRepository {
  private readonly source: Repository<Session>;

  constructor(db: DataSource, SessionModel: EntityTarget<Session>) {
    this.source = db.getRepository(SessionModel);
  }

  find(
    userId: string,
    sessionId?: string,
    status: "all" | "active" | "inactive" = "active",
  ) {
    return this.source.findOne({
      where: {
        user: {
          register: userId,
        },
        ...(sessionId && { id: sessionId }),
        isActive: status === "all" ? undefined : status === "active",
      },
      order: {
        createdAt: "ASC",
      },
      relations: {
        user: true,
      },
    });
  }

  findAll(userId: string, status: "all" | "active" | "inactive" = "active") {
    return this.source.find({
      where: {
        user: {
          register: userId,
        },
        isActive: status === "all" ? undefined : status === "active",
      },
      order: {
        createdAt: "ASC",
      },
      relations: {
        user: true,
      },
    });
  }

  async update(
    data: Omit<Partial<ISession>, "userId" | "expiratAt" | "createdAt" | "id">,
    user: User,
    sessionId?: string,
  ) {
    return this.source.update(
      {
        user: {
          register: user.register,
        },
        ...(sessionId && { id: sessionId }),
      },
      {
        ...data,
        user,
      },
    );
  }

  async create(
    data: Omit<ISession, "createdAt" | "updatedAt" | "id" | "userId">,
    user: User,
  ) {
    const session = this.source.create({
      ...data,
      isActive: true,
      createdAt: new Date(),
      user,
    });

    return this.source.save(session);
  }
}

export { SessionRepository };
