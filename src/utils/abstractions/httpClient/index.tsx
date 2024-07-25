/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

/**
 * A generic HTTP client that fetches data from an API endpoint.
 * @param url The URL of the API endpoint to fetch data from.
 * @param type The type of HTTP request to make (GET, POST, PUT, DELETE).
 * @param body The body of the request, if applicable.
 * @param headers The headers to include in the request.
 * @param options Additional options for the request.
 * @returns The data fetched from the API endpoint.
 */

type HttpClientOptions = {
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
  refreshInterval?: boolean;
  dontRefresh?: boolean;
};

export type HttpClientProps = {
  url: string;
  type?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, string | number | boolean>;
  headers?: Record<string, string | number | boolean>;
  shouldFetch?: boolean;
  options?: HttpClientOptions;
};

type HttpClientResponse<T> = {
  result?: T;
  statusCode: number;
  headers?: Record<string, string | number | boolean>;
};

export class HTTPClientImplementation {
  private httpClient<T>({
    url,
    type,
    body,
    headers,
    shouldFetch = true,
    options,
  }: HttpClientProps) {
    const fetcher = async () => {
      let res: AxiosResponse<T>;
      switch (type) {
        case "DELETE":
          res = await axios.delete<T>(url, { headers });
          break;

        case "POST":
          res = await axios.post<T>(url, body, { headers });
          break;

        case "PUT":
          res = await axios.put<T>(url, body, { headers });
          break;

        default:
          res = await axios.get<T>(url, { headers });
          break;
      }

      return {
        result: res.data,
        statusCode: res.status,
        headers: res.headers,
      } as HttpClientResponse<T>;
    };

    const newRes = !options?.dontRefresh
      ? useSWR<HttpClientResponse<T>>(shouldFetch ? url : null, fetcher, {
          refreshInterval: options?.refreshInterval ? 1000 * 60 * 5 : 0,
          revalidateOnFocus: Boolean(options?.revalidateOnFocus) || true,
          revalidateOnReconnect:
            Boolean(options?.revalidateOnReconnect) || true,
          errorRetryCount: 3,
          errorRetryInterval: 3000,
          refreshWhenHidden: Boolean(options?.refreshInterval) || false,
          refreshWhenOffline: Boolean(options?.refreshInterval) || true,
        })
      : useSWRImmutable<HttpClientResponse<T>>(
          shouldFetch ? url : null,
          fetcher,
        );

    return {
      data: newRes.data?.result as unknown as T,
      error: newRes.error,
      isLoading: (!newRes.data && !newRes.error) || newRes.isLoading,
      statusCode: newRes.data?.statusCode,
      headers: newRes.data?.headers,
      mutate: newRes.mutate,
      isValidating: newRes.isValidating,
    };
  }

  get<T>(props: Omit<HttpClientProps, "type">) {
    return this.httpClient<T>({
      ...props,
      type: "GET",
    });
  }

  post<T>(props: Omit<HttpClientProps, "type">) {
    return this.httpClient<T>({
      ...props,
      type: "POST",
    });
  }

  put<T>(props: Omit<HttpClientProps, "type">) {
    return this.httpClient<T>({
      ...props,
      type: "PUT",
    });
  }

  delete<T>(props: Omit<HttpClientProps, "type">) {
    return this.httpClient<T>({
      ...props,
      type: "DELETE",
    });
  }
}
