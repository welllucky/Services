import { httpClient } from "@/implementations/client";
import { IUser } from "@/types";

export class UserApi {
  private readonly base_url: string | undefined;

  private readonly api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/user`;
  }

  getUser = ({
    accessToken,
    shouldFetch = false,
  }: {
    accessToken: string;
    shouldFetch?: boolean;
  }) =>
    httpClient.get<IUser>({
      url: this.api_url,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      shouldFetch,
    });
}
