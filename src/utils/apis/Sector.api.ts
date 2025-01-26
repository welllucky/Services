import { IHttpClient } from "@/implementations/client/interfaces";

export class SectorApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/sector`;
    this.httpClient = httpClient;
  }

  getSectors = () => {
    return this.httpClient.get({
      url: `${this.apiUrl}`,
    });
  };

  getRolesBySector = (sectorId: string) => {
    return this.httpClient.get({
      url: `${this.apiUrl}${sectorId}/roles`,
    });
  };
}
