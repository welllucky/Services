import { IHttpClient } from "@/implementations/client/interfaces";
import { IHttpResponse, ISessionResponse } from "@/types";
import { defaultHeaders } from "@/utils/constraints";

export class SessionApi {
  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    // this.apiUrl = `${process.env.NEXT_PUBLIC_APIS_BASE_URL}sessions`;
    this.apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}api/sessions`;
    this.httpClient = httpClient;
  }

  createSession = async (
    email: string,
    password: string,
  ): Promise<{
    data?: ISessionResponse | null;
    error?: { message?: string; title?: string } | null;
  }> => {
    const res = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        ...defaultHeaders,
      },
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
    const res = await fetch(this.apiUrl, {
      method: "DELETE",
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
