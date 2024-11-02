/* eslint-disable camelcase */
import { IHttpError, IHttpResponse, IUser } from "@/types";

export const getUserFromDb = async (email: string, password: string) => {
  try {
    const { BASE_URL } = process.env;
    const pwHash = password;
    const res = await fetch(
      `${BASE_URL}api/user?username=${email}&password=${pwHash}`,
    );

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
