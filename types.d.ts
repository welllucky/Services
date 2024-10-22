import { IUser } from "@/types/Interfaces/User";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: IUser;
  }

  interface User {
    register?: string;
    name?: string;
    email?: string;
    lastConnection?: Date;
    isBanned?: boolean;
    canCreateTicket?: boolean;
    canResolveTicket?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {
    id?: string;
  }
}
