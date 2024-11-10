import { ISessionResponse, SignInSchema } from "@/types";

export const createSession = async (email: string, password: string) => {
  try {
    const { BASE_URL } = process.env;
    const { email: reliableEmail, password: reliablePassword } =
      SignInSchema.parse({ email, password });

    const res = await fetch(
      BASE_URL ? `${BASE_URL}/api/session` : "/api/session",
      {
        body: JSON.stringify({
          email: reliableEmail,
          password: reliablePassword,
        }),
        method: "POST",
      },
    );

    const { accessToken, expiresAt } = (await res.json()) as ISessionResponse;

    if (!accessToken) throw new Error("Access token not created");

    return { accessToken, expiresAt };
  } catch (error) {
    console.log({ error });
    return { error };
  }
};
