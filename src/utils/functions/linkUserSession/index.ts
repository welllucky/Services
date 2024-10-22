import { IHttpError, IHttpResponse, IUser } from "@/types";

export const linkUserSession = async (email: string, password: string) => {
  try {
    const res = await fetch("/api/user", {
      body: JSON.stringify({ email, password }),
      method: "PUT",
    });

    const { status, error } = (await res.json()) as IHttpResponse<
      IUser,
      IHttpError
    >;

    if (error) throw new Error(error?.message);

    return { isLinked: status === 200 };
  } catch (error) {
    return { isLinked: false, error };
  }
};
