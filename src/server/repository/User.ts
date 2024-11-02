import AppDataSource from "@/database";
import { User } from "@/server/models";
import { IUser } from "@/types";
import { DataSource, EntityTarget, Repository } from "typeorm";

class UserRepository {
  private source: Repository<User>;

  constructor(db: DataSource, UserModel: EntityTarget<User>) {
    this.source = db.getRepository(UserModel);
  }

  async find(email: string, password: string) {
    return this.source.findOne({
      where: {
        email,
        hash: password,
      },
    });
  }

  async findByRegister(register: string) {
    return this.source.findOneBy({ register });
  }

  async findByEmail(email: string) {
    console.log("Well - oi");
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
}

export { UserRepository };
