import axios, { AxiosResponse } from "axios";
import useSWR from "swr";

function httpClient<T>(
  originUrl: string,
  type?: "GET" | "POST" | "PUT" | "DELETE",
  body?: Record<string, string | number | boolean>,
  headers?: Record<string, string | number | boolean>,
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
  return useSWR<T>(originUrl, fetcher);
}

export { httpClient };
