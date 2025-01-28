import { IHttpClient } from "@/implementations/client/interfaces";
import { CreateAccountDto, IHttpError, IHttpResponse, IUser } from "@/types";

export class AccountApi {
  private readonly base_url: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.base_url}api/account`;
    this.httpClient = httpClient;
  }

  create = async ({
    data,
  }: {
    data: CreateAccountDto;
  }): Promise<IHttpResponse<IUser, IHttpError>> => {
    const res = await fetch(this.apiUrl, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resBody = (await res.json()) as IHttpResponse<IUser, IHttpError>;

    return {
      data: resBody.data,
      error: resBody.error,
      status: res.status,
      message: resBody.message,
    };
    // return this.httpClient.post<IHttpResponse<IUser, IHttpError>>({
    //   url: this.apiUrl,
    //   body: data,
    // });
  };
}
