/* eslint-disable no-unused-vars */

import { HttpClientProps, IHttpError, IHttpResponse } from "../interfaces";

export interface IHttpClient {
  get<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  post<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  put<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  delete<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  // patch<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, unknown>;
}
