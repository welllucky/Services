import { httpClient } from "@/implementations/client";
import { TicketDto } from "@/types";

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

  getSearch = (searchTerm: string, shouldFetch: boolean) =>
    httpClient.get<SearchResponse>({
      url: `${this.api_url}?searchTerm=${searchTerm}`,
      shouldFetch,
    });
}
