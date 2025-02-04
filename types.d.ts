import { IUser } from "@/types/Interfaces/User";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: IUser;
    accessToken: string;
  }

  interface User {
    id: string;
    register: string;
    name: string;
    email: string;
    lastConnection?: string | null;
    isBanned: boolean;
    canCreateTicket: boolean;
    canResolveTicket: boolean;
    role: string;
    sector: string;
    systemRole: string;
    accessToken: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {
    id?: string;
  }
}
