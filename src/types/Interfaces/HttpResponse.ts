type ErrorLevel = "low" | "medium" | "critical";

export interface IHttpResponse<T, K> {
  data?: T;
  isLoading?: boolean;
  error?: K;
  status?: number | string;
}

export interface IHttpError {
  title?: string;
  message?: string;
  level?: ErrorLevel;
}
