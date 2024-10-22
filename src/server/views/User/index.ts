import { IHttpResponse, IUser } from "@/types";

type getUserProps<E> = {
  user?: IUser | null;
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
      data: user ?? undefined,
      error: error ?? undefined,
      status,
    };
  }
}

export { UserView };
