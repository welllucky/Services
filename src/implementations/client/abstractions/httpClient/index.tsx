/* eslint-disable react-hooks/rules-of-hooks */
import { HttpClientProps, IHttpError, IHttpResponse } from "@/types";
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import {
  IHttpClient,
  IHttpClientResponse,
} from "../../../interfaces/IHttpClient.interface";

/**
 * A generic HTTP client that fetches data from an API endpoint.
 * @param url The URL of the API endpoint to fetch data from.
 * @param type The type of HTTP request to make (GET, POST, PUT, DELETE).
 * @param body The body of the request, if applicable.
 * @param headers The headers to include in the request.
 * @param options Additional options for the request.
 * @returns The data fetched from the API endpoint.
 */

export class HTTPClient implements IHttpClient {
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

  private httpClient<T>({
    url,
    type,
    body,
    headers,
    shouldFetch = true,
    options,
  }: HttpClientProps): IHttpResponse<T, IHttpError> {
    const fetchId = shouldFetch ? url : null;
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
      } as IHttpClientResponse<T>;
    };

    const newRes = !options?.dontRefresh
      ? useSWR<IHttpClientResponse<T>>(fetchId, fetcher, {
          refreshInterval: options?.refreshInterval ? 1000 * 60 * 10 : 0,
          revalidateOnFocus: options?.revalidateOnFocus || false,
          revalidateOnReconnect: options?.revalidateOnReconnect || true,
          refreshWhenHidden: options?.refreshWhenHidden || true,
          refreshWhenOffline: options?.refreshWhenOffline || true,
          errorRetryCount: 3,
          errorRetryInterval: 30000,
        })
      : useSWRImmutable<IHttpClientResponse<T>>(fetchId, fetcher);

    return {
      data: newRes.data?.result as unknown as T,
      error: newRes.data?.result?.error || newRes.error,
      isLoading: (!newRes.data && !newRes.error) || newRes.isLoading,
      status: newRes.data?.statusCode,
      headers: newRes.data?.headers,
      mutate: newRes.mutate,
      isValidating: newRes.isValidating,
    };
  }
}
