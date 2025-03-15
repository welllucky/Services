import { KeyedMutator } from "swr";

type ErrorLevel = "low" | "medium" | "critical";

export type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

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

export type HttpClientOptions = {
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
  refreshInterval?: boolean;
  dontRefresh?: boolean;
  refreshWhenHidden?: boolean;
  refreshWhenOffline?: boolean;
};

type PrimitiveType = string | number | boolean;

export interface HttpProps {
  url: string;
  method?: HTTPMethods;
  body?: Record<string, PrimitiveType>;
  headers?: Record<string, PrimitiveType>;
}

export interface HttpAgentAbstractionProps extends HttpProps {
  // eslint-disable-next-line no-undef
  cache?: RequestCache;
  keepalive?: boolean;
  // eslint-disable-next-line no-undef
  credentials?: RequestCredentials;
  referrer?: string;
  // eslint-disable-next-line no-undef
  referrerPolicy?: ReferrerPolicy;
  revalidate?: number | false;
  tags?: string[];
}

export interface HttpClientProps extends HttpProps {
  shouldFetch?: boolean;
  options?: HttpClientOptions;
}

export type HttpAgentProps = Omit<HttpProps, "method"> & {
  options?: Pick<
    HttpAgentAbstractionProps,
    | "cache"
    | "keepalive"
    | "credentials"
    | "referrer"
    | "referrerPolicy"
    | "revalidate"
    | "tags"
  >;
};

export type IHttpClientProps = Pick<HttpClientProps, "options" | "shouldFetch">;

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
  message?: string | string[];
  level?: ErrorLevel;
}
