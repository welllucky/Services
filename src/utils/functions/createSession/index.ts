import { SignInSchema } from "@/types";
import { SessionApi } from "@/utils/apis/Session";

export const createSession = async (email: string, password: string) => {
  const sessionApi = new SessionApi();
  try {
    const { email: reliableEmail, password: reliablePassword } =
      SignInSchema.parse({ email, password });

    const { data, error } = await sessionApi.createSession(
      reliableEmail,
      reliablePassword,
    );

    if (!data?.token || error?.message) {
      throw new Error(error?.message ?? "Error creating session");
    }

    return { accessToken: data.token };
  } catch (error) {
    console.log({ error });
    return {
      error: {
        message: (error as Error).message,
      },
    };
  }
};
