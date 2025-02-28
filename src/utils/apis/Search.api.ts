import { IHttpClient } from "@/implementations/interfaces";
import { TicketDto } from "@/types";

export type SearchResponse = {
  result?: TicketDto[];
  status?: number;
  error?: {
    message: string;
  };
};

export class SearchApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/search`;
    this.httpClient = httpClient;
  }

  getSearch = (searchTerm: string, shouldFetch: boolean) =>
    this.httpClient.get<SearchResponse>({
      url: `${this.apiUrl}?searchTerm=${searchTerm}`,
      shouldFetch,
    });
}
