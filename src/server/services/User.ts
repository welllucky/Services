import { userRepository } from "@/server/repository";
import { ICreateUser } from "@/types";

class UserServices {
  private static readonly UserRepository = userRepository;

  static findByEmail(email: string) {
    return this.UserRepository.findByEmail(email);
  }

  static findByRegister(register: string) {
    return this.UserRepository.findByRegister(register);
  }

  static exits(register: string, email: string) {
    return this.UserRepository.exits(register, email);
  }

  static create(data: ICreateUser) {
    return this.UserRepository.create(data);
  }
}

export { UserServices };
