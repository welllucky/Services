/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

/**
 * A generic HTTP client that fetches data from an API endpoint.
 * @param originUrl The URL of the API endpoint to fetch data from.
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
  originUrl: string;
  type?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, string | number | boolean>;
  headers?: Record<string, string | number | boolean>;
  options?: HttpClientOptions;
};

function httpClient<T>(
  originUrl: string,
  type?: "GET" | "POST" | "PUT" | "DELETE",
  body?: Record<string, string | number | boolean>,
  headers?: Record<string, string | number | boolean>,
  options?: HttpClientOptions,
) {
  const fetcher = async () => {
    let res: AxiosResponse<T>;
    switch (type) {
      case "DELETE":
        res = await axios.delete<T>(originUrl, { headers });
        return res.data as unknown as T;

      case "POST":
        res = await axios.post<T>(originUrl, body, { headers });
        return res.data as unknown as T;

      case "PUT":
        res = await axios.put<T>(originUrl, body, { headers });
        return res.data as unknown as T;

      default:
        res = await axios.get<T>(originUrl, { headers });
        return res.data as unknown as T;
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return options?.dontRefresh
    ? useSWRImmutable<T>(originUrl, fetcher)
    : useSWR<T>(originUrl, fetcher, {
        refreshInterval: options?.refreshInterval ? 1000 * 60 * 5 : 0,
        revalidateOnFocus: Boolean(options?.revalidateOnFocus) ?? true,
        revalidateOnReconnect: Boolean(options?.revalidateOnReconnect) ?? true,
        errorRetryCount: 3,
        errorRetryInterval: 3000,
        refreshWhenHidden: Boolean(options?.refreshInterval) ?? false,
        refreshWhenOffline: Boolean(options?.refreshInterval) ?? true,
      });
}

export { httpClient };
