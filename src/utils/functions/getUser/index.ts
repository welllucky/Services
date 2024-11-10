import { IHttpError, IHttpResponse, IUser } from "@/types";

export const getUser = async (accessToken: string) => {
  try {
    const { BASE_URL } = process.env;
    const res = await fetch(BASE_URL ? `${BASE_URL}api/user` : "/api/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { data: user, error } = (await res.json()) as IHttpResponse<
      IUser,
      IHttpError
    >;

    if (error) throw new Error(error?.message);

    return { user };
  } catch (error) {
    return { error };
  }
};
