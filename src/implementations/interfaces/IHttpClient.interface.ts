/* eslint-disable no-unused-vars */
import { HttpClientProps, IHttpError, IHttpResponse } from "@/types";

export interface IHttpClientResponse<T> {
  result?: {
    data?: T;
    error?: {
      message?: string;
      title?: string;
    };
  };
  statusCode: number;
  headers?: Record<string, string | number | boolean>;
}

export interface IHttpClient {
  get<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  post<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  put<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  delete<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, IHttpError>;

  // patch<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, unknown>;
}
