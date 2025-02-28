import { IHttpClient } from "@/implementations/interfaces";

export interface IApi {
  httpClient: IHttpClient;
  baseUrl?: string;
  apiUrl: string;
  //   appMonitoringClient?: unknown;
}
