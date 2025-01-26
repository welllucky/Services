import { IHttpClientResponse } from "@/implementations/client/interfaces";
import { KeyedMutator } from "swr";

type ErrorLevel = "low" | "medium" | "critical";

export type HttpClientOptions = {
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
  refreshInterval?: boolean;
  dontRefresh?: boolean;
};

export interface HttpClientProps {
  url: string;
  type?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, string | number | boolean>;
  headers?: Record<string, string | number | boolean>;
  shouldFetch?: boolean;
  options?: HttpClientOptions;
}

export interface IHttpResponse<T, K> {
  data?: T;
  message?: string;
  isLoading?: boolean;
  error?: K;
  status?: number;
  headers?: Record<string, string | number | boolean>;
  mutate?: KeyedMutator<IHttpClientResponse<T>>;
  isValidating?: boolean;
}

export interface IHttpError {
  title?: string;
  message?: string;
  level?: ErrorLevel;
}
