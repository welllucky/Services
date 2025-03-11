/* eslint-disable no-unused-vars */

import {
  HttpAgentProps,
  HttpClientProps,
  HTTPMethods,
  IHttpError,
  IHttpResponse,
} from "../interfaces";

export interface IHttpClient {
  get<T>(props: Omit<HttpClientProps, "method">): IHttpResponse<T, IHttpError>;

  post<T>(props: Omit<HttpClientProps, "method">): IHttpResponse<T, IHttpError>;

  put<T>(props: Omit<HttpClientProps, "method">): IHttpResponse<T, IHttpError>;

  delete<T>(
    props: Omit<HttpClientProps, "method">,
  ): IHttpResponse<T, IHttpError>;

  patch<T>(props: Omit<HttpClientProps, "method">): IHttpResponse<T, unknown>;
}

export interface IHttpAbstract {
  fetch(
    url: string,
    method: HTTPMethods,
    options: Partial<Omit<HttpAgentProps, "url">>,
  ): Promise<Response>;

  abort(): void;
}

export interface IHttpAgent {
  abort(): void;
  get<T>(props: HttpAgentProps): Promise<IHttpResponse<T, IHttpError>>;

  post<T>(props: HttpAgentProps): Promise<IHttpResponse<T, IHttpError>>;

  put<T>(props: HttpAgentProps): Promise<IHttpResponse<T, IHttpError>>;

  delete<T>(props: HttpAgentProps): Promise<IHttpResponse<T, IHttpError>>;

  patch<T>(props: HttpAgentProps): Promise<IHttpResponse<T, IHttpError>>;
}
