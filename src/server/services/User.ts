import { userRepository } from "@/server/repository";

class UserServices {
  private static readonly UserRepository = userRepository;

  static findByEmailAndPassword(email: string, password: string) {
    return this.UserRepository.find(email, password);
  }

  static findByEmail(email: string) {
    return this.UserRepository.findByEmail(email);
  }
}

export { UserServices };
