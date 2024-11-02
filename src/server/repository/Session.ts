import { Session } from "@/server/models/Session";
import { ISession } from "@/types";
import { DataSource, EntityTarget, Repository } from "typeorm";
import { User } from "../models";

class SessionRepository {
  private source: Repository<Session>;

  private userRepository: Repository<User>;

  constructor(
    db: DataSource,
    SessionModel: EntityTarget<Session>,
    UserModel: EntityTarget<User>,
  ) {
    this.source = db.getRepository(SessionModel);
    this.userRepository = db.getRepository(UserModel);
  }

  find(userId: string) {
    return this.source.findOneBy({
      user: {
        register: userId,
      },
    });
  }

  findAll(userId: string) {
    return this.source.findBy({
      user: {
        register: userId,
      },
    });
  }

  async update(userId: string, data: Omit<Partial<ISession>, "userId">) {
    const user = await this.userRepository.findOneBy({ register: userId });
    return this.source.update(
      {
        user: {
          register: userId,
        },
      },
      {
        ...data,
        user: {
          ...user,
        },
      },
    );
  }

  async create(data: Omit<ISession, "createdAt" | "updatedAt" | "id">) {
    return this.source.create({
      ...data,
      createdAt: new Date(),
    });
  }
}

export { SessionRepository };
