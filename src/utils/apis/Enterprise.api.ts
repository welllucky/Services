import { IHttpError, IHttpResponse, RoleDto, SectorDto } from "@/types";
import { IHttpClient } from "@/types/abstractions";

export class EnterpriseApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly altApiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient, enterpriseName: string) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/enterprise/${enterpriseName}`;
    this.altApiUrl = `${this.baseUrl}api/public/enterprise/${enterpriseName}`;
    this.httpClient = httpClient;
  }

  getSectors = (shouldFetch?: boolean) => {
    return this.httpClient.get<IHttpResponse<SectorDto[], IHttpError>>({
      url: `${this.altApiUrl}/sectors`,
      shouldFetch,
    });
  };

  getRolesBySector = ({
    sectorId,
    shouldFetch,
  }: {
    sectorId?: string;
    shouldFetch: boolean;
  }) => {
    return this.httpClient.get<IHttpResponse<RoleDto[], IHttpError>>({
      url: `${this.altApiUrl}/sectors/${sectorId}/roles`,
      shouldFetch,
    });
  };
}
