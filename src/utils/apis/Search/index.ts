import { TicketDto } from "@/types";
import { httpClient } from "@/utils/abstractions/httpClient";

export type SearchResponse = {
  result?: TicketDto[];
  status?: number;
  error?: {
    message: string;
  };
};

export class SearchApi {
  private readonly base_url: string | undefined;

  private readonly api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/search`;
  }

  getSearch = (searchTerm: string, shouldFetch: boolean) => {
    const response = httpClient.get<SearchResponse>({
      url: `${this.api_url}?searchTerm=${searchTerm}`,
      shouldFetch,
    });

    return response;
  };
}
