import { IHttpClient } from "@/implementations/client/interfaces";

export interface IApi {
  httpClient: IHttpClient;
  baseUrl?: string;
  apiUrl: string;
//   appMonitoringClient?: unknown;
}
