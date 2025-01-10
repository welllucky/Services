type ErrorLevel = "low" | "medium" | "critical";

export interface IHttpResponse<T, K> {
  data?: T;
  message?: string;
  isLoading?: boolean;
  error?: K;
  status?: number;
}

export interface IHttpError {
  title?: string;
  message?: string;
  level?: ErrorLevel;
}
