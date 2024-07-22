export interface IHttpResponse<T, K> {
  data?: T;
  isLoading?: boolean;
  error?: K;
}
