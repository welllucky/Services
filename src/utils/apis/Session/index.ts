import { IHttpResponse, ISessionResponse } from "@/types";
import { defaultHeaders } from "@/utils/constraints";

export class SessionApi {
  private readonly api_url: string;

  constructor() {
    // this.api_url = `${process.env.NEXT_PUBLIC_APIS_BASE_URL}sessions`;
    this.api_url = `${process.env.NEXT_PUBLIC_BASE_URL}api/sessions`;
  }

  createSession = async (
    email: string,
    password: string,
  ): Promise<{
    data?: ISessionResponse | null;
    error?: { message?: string; title?: string } | null;
  }> => {
    const res = await fetch(this.api_url, {
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

    console.log({ data, error });
    return { data, error };
  };

  // closeSession = async (accessToken: string) => {
  //   if (typeof window === "undefined") {
  //     const res = await fetch(this.api_url, {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     const { data, error } = (await res.json()) as IHttpResponse<
  //       ISessionResponse,
  //       { message?: string; title?: string }
  //     >;

  //     return { data, error };
  //   }

  //   return httpClient.delete<ISessionResponse>({
  //     url: this.api_url,
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  // };
}
