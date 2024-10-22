import { User } from "@/server/models";
import { IUser } from "@/types";
import { Op } from "sequelize";

class UserRepository {
  static find(email: string, password: string) {
    return User.findOne({
      where: {
        [Op.and]: [{ email }, { hash: password }],
      },
    });
  }

  static findByRegister(register: string) {
    return User.findOne({
      where: {
        register,
      },
    });
  }

  static findByEmail(email: string) {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  static async update(
    register: string,
    data: Partial<Omit<IUser, "register">>,
  ) {
    const user = await UserRepository.findByEmail(register);
    if (user) {
      return User.update({ ...data }, { where: { register } });
    }

    return null;
  }
}

export { UserRepository };
