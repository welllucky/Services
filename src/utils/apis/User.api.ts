import { IUser } from "@/types";
import { IHttpClient } from "@/types/abstractions";

export class UserApi {
  private readonly base_url: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.base_url}/api/user`;
    this.httpClient = httpClient;
  }

  getUser = ({
    accessToken,
    shouldFetch = false,
  }: {
    accessToken: string;
    shouldFetch?: boolean;
  }) =>
    this.httpClient.get<IUser>({
      url: this.apiUrl,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      shouldFetch,
    });
}
