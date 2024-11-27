import { IRegisterUser } from "@/types";
import * as bcrypt from "bcrypt";
import { User } from "../entities";
import { userRepository } from "../repository";

interface UserModelConstructorModel {
  register?: string;
  email?: string;
}

class UserModel {
  private user: User | null;

  private readonly repository = userRepository;

  constructor(passedUserRepository?: User | null) {
    this.user = passedUserRepository ?? null;
  }

  async init({ register, email }: UserModelConstructorModel) {
    const userByEmail = register
      ? await this.repository.findByRegister(register)
      : null;

    const userByRegister = email
      ? await this.repository.findByEmail(email)
      : null;

    if (!userByEmail && !userByRegister) {
      throw new Error("Usuário não encontrado");
    }

    this.user = userByRegister || userByEmail;
  }

  exists({ safe = false }: { safe?: boolean }) {
    if (!this.user) {
      if (!safe) throw new Error("Usuário não encontrado");
      return false;
    }

    return true;
  }

  getData() {
    return this.user;
  }

  getEntity() {
    if (this.user) return this.user;
    throw new Error("Não existe entidade para o usuário");
  }

  getFullName() {
    return this.user?.name;
    // return `${this.user.firstName} ${this.user.lastName}`;
  }

  getRole() {
    return this.user?.role;
  }

  isBanned() {
    return this.user?.isBanned;
  }

  canCreateTicket() {
    return this.user?.canCreateTicket;
  }

  canResolveTicket() {
    return this.user?.canResolveTicket;
  }

  getEmail() {
    return this.user?.email;
  }

  getRegister() {
    return this.user?.register;
  }

  getLastConnection() {
    return this.user?.lastConnection;
  }

  getConnectedTime() {
    if (this.user?.lastConnection) {
      return new Date(
        new Date().getTime() - this.user.lastConnection.getTime(),
      ).getHours();
    }

    return 0;
  }

  getSectors() {
    return this.user?.sector;
  }

  authUser(password: string) {
    return bcrypt.compare(password, this.user?.hash ?? "");
  }

  async createUser(data: IRegisterUser) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(data.password, salt);

    const user = await this.repository.create({
      ...data,
      createdAt: new Date(),
      hash: hashPassword,
      salt,
    });

    this.user = user;

    return { user };
  }
}

export { UserModel };
