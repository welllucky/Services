import { IHttpClient } from "@/implementations/interfaces";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";

export type SearchResponse = TicketDto[];

export class SearchApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/search`;
    this.httpClient = httpClient;
  }

  getSearch = (searchTerm: string, accessToken: string, shouldFetch: boolean) =>
    this.httpClient.get<IHttpResponse<SearchResponse, IHttpError>>({
      url: `${this.apiUrl}?searchTerm=${searchTerm}`,
      shouldFetch,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
}
