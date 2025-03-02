import { IHttpClient } from "./IHttpClient.interface";

export interface IApi {
  httpClient: IHttpClient;
  baseUrl?: string;
  apiUrl: string;
  //   appMonitoringClient?: unknown;
}
