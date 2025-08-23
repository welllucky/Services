import { ThemeProps } from "@/styles";
import { IUser } from "@/types/interfaces/User";
import "next-auth";
import "next-auth/jwt";
import "styled-components";

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
    position: string;
    sector: string;
    role: string;
    accessToken: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {
    id?: string;
  }
}

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends ThemeProps {}
}
