import { IHttpClient } from "@/implementations/client/interfaces";
import { IHttpError, IHttpResponse, RoleDto, SectorDto } from "@/types";

export class EnterpriseApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient, enterpriseName: string) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/public/enterprise/${enterpriseName}`;
    this.httpClient = httpClient;
  }

  getSectors = (shouldFetch?: boolean) => {
    return this.httpClient.get<IHttpResponse<SectorDto[], IHttpError>>({
      url: `${this.apiUrl}/sectors`,
      shouldFetch,
    });
  };

  getRolesBySector = ({
    sectorId,
    shouldFetch,
  }: {
    sectorId: string;
    shouldFetch: boolean;
  }) => {
    return this.httpClient.get<IHttpResponse<RoleDto[], IHttpError>>({
      url: `${this.apiUrl}/sectors/${sectorId}/roles`,
      shouldFetch,
    });
  };
}
