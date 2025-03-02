import { IHttpResponse, ISessionResponse } from "@/types";
import { IHttpClient } from "@/types/abstractions";

export class SessionApi {
  private readonly apiUrl: string;

  private readonly altApiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}api/session`;
    this.altApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}api/public/session`;
    this.httpClient = httpClient;
  }

  createSession = async (
    email: string,
    password: string,
  ): Promise<{
    data?: ISessionResponse | null;
    error?: { message?: string; title?: string } | null;
  }> => {
    const res = await fetch(this.altApiUrl, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { data, error } = (await res.json()) as IHttpResponse<
      ISessionResponse,
      { message?: string; title?: string }
    >;

    return { data, error };
  };

  closeSession = async (accessToken: string) => {
    const res = await fetch(`${this.apiUrl}/close`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { data, error } = (await res.json()) as IHttpResponse<
      ISessionResponse,
      { message?: string; title?: string }
    >;

    return { data, error };
  };
}
