import { IHttpResponse, IUser, IUserTable } from "@/types";

type getUserProps<E> = {
  user?: IUserTable | null;
  error?: E | null;
  status?: number | string;
};

class UserView {
  static getUser<E>({
    error,
    status,
    user,
  }: getUserProps<E>): IHttpResponse<IUser, E> {
    return {
      data: {
        canCreateTicket: user?.canCreateTicket,
        canResolveTicket: user?.canResolveTicket,
        email: user?.email,
        name: user?.name,
        isBanned: user?.isBanned,
        register: user?.register,
        lastConnection: user?.lastConnection,
        role: user?.role,
        sector: user?.sector,
      } as IUser,
      error: error ?? undefined,
      status,
    };
  }
}

export { UserView };
