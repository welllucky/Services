import { defaultHeaders } from "@/constraints";
import { IHttpResponse, ISessionResponse, SignInSchema } from "@/types";

export const createSession = async (email: string, password: string) => {
  try {
    const { email: reliableEmail, password: reliablePassword } =
      SignInSchema.parse({ email, password });

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/sessions`, {
      method: "POST",
      headers: {
        ...defaultHeaders,
      },
      body: JSON.stringify({
        email: reliableEmail,
        password: reliablePassword,
      }),
    });

    const { data, error } = (await res.json()) as IHttpResponse<
      ISessionResponse,
      { message?: string; title?: string }
    >;

    if (!data?.token || error?.message) {
      throw new Error(error?.message ?? "Error creating session");
    }

    return { accessToken: data.token };
  } catch (error) {
    return {
      error: {
        message: (error as Error).message,
      },
    };
  }
};
