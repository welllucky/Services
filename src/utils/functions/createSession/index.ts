import { defaultHeaders } from "@/constraints";
import { IAccessResponse, IHttpResponse, SignInSchema } from "@/types";

export const createSession = async (email: string, password: string) => {
  try {
    const { email: reliableEmail, password: reliablePassword } =
      SignInSchema.parse({ email, password });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/public/session`,
      {
        method: "POST",
        headers: {
          ...defaultHeaders,
        },
        body: JSON.stringify({
          email: reliableEmail,
          password: reliablePassword,
        }),
      },
    );

    const { data, error } = (await res.json()) as IHttpResponse<
      IAccessResponse,
      { message?: string; title?: string }
    >;

    if (!data?.accessToken || error?.message) {
      throw new Error(error?.message ?? "Error creating session");
    }

    return { accessToken: data.accessToken };
  } catch (error) {
    return {
      error: {
        message: (error as Error).message,
      },
    };
  }
};
