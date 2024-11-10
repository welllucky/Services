import AppDataSource from "@/database";
import { User } from "@/server/entities";
import { IUser, IUserTable } from "@/types";
import { DataSource, EntityTarget, Repository } from "typeorm";

class UserRepository {
  private source: Repository<User>;

  constructor(db: DataSource, UserModel: EntityTarget<User>) {
    this.source = db.getRepository(UserModel);
  }

  async find(email: string, hash: string) {
    return this.source.findOne({
      where: {
        email,
        hash,
      },
    });
  }

  async findByRegister(register: string) {
    return this.source.findOneBy({ register });
  }

  async findByEmail(email: string) {
    return AppDataSource.getRepository(User).findOneBy({
      email,
    });
  }

  async update(register: string, data: Partial<Omit<IUser, "register">>) {
    return AppDataSource.createQueryBuilder()
      .update(User)
      .set({ ...data })
      .where("register = :register", { register })
      .execute();
  }

  async create(data: Partial<IUserTable>) {
    return this.source.save(data);
  }

  async exits(register: string, email: string) {
    return this.source.findOne({
      where: {
        register,
        email,
      },
    });
  }
}

export { UserRepository };
