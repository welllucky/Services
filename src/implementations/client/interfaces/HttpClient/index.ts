/* eslint-disable no-unused-vars */
import { HttpClientProps, IHttpResponse } from "@/types";

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
  get<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, unknown>;

  post<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, unknown>;

  put<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, unknown>;

  delete<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, unknown>;

  // patch<T>(props: Omit<HttpClientProps, "type">): IHttpResponse<T, unknown>;
}
