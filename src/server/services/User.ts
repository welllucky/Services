import { UserRepository } from "@/server/repository";

class UserServices {
  static findByEmailAndPassword(email: string, password: string) {
    return UserRepository.find(email, password);
  }

  static findByEmail(email: string) {
    return UserRepository.findByEmail(email);
  }
}

export { UserServices };
