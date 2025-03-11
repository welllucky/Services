/* eslint-disable import/no-unresolved */
import {
  HttpAgentProps,
  HTTPMethods,
  IAppMonitoring,
  IHttpAbstract,
  IHttpAgent,
  IHttpError,
  IHttpResponse,
} from "@/types";

const defaultMessageError = "An error occurred while fetching the data";

class HttpAgent implements IHttpAgent {
  private readonly agent: IHttpAbstract;

  private readonly appMonitoring: IAppMonitoring;

  constructor(agent: IHttpAbstract, appMonitoring: IAppMonitoring) {
    this.agent = agent;
    this.appMonitoring = appMonitoring;
  }

  abort(): void {
    return this.agent.abort();
  }

  private async fetcher<T, K = IHttpError>(
    url: string,
    method: HTTPMethods,
    options: Partial<Omit<HttpAgentProps, "url" | "method">>,
  ): Promise<IHttpResponse<T, K>> {
    try {
      const res = await this.agent.fetch(url, method, options);

      if (res.status === 204) {
        return {
          data: undefined,
          status: res.status,
          message: "No content",
          // headers: Object.fromEntries(res?.headers?.entries()),
        };
      }

      if (!res.ok) {
        res
          .json()
          .then((data) => {
            this.appMonitoring.captureException(
              new Error(data.message || defaultMessageError),
              {
                data: {
                  url,
                  method,
                },
              },
            );

            return {
              error: {
                message: (data as IHttpError).message || defaultMessageError,
                title: (data as IHttpError).title ?? "Error",
                level: (data as IHttpError).level ?? "medium",
              },
              status: res.status,
            };
          })
          .catch((error) => {
            throw error;
          });
      }

      const resBody = (await res.json()) as IHttpResponse<T, IHttpError>;

      return {
        data: resBody.data,
        error: resBody.error as K,
        headers: Object.fromEntries(res?.headers?.entries()),
        status: res.status,
        message: resBody.message,
      };
    } catch (error) {
      this.appMonitoring.captureException(error, {
        data: {
          url,
          method,
        },
      });
      return {
        data: undefined,
        error: {
          message: defaultMessageError,
          title: "Error",
          level: "critical",
        } as K,
        status: 500,
      };
    }
  }

  async get<T>(
    props: Omit<HttpAgentProps, "method">,
  ): Promise<IHttpResponse<T, IHttpError>> {
    return this.fetcher<T>(props.url, "GET", { ...props });
  }

  async post<T>(
    props: Omit<HttpAgentProps, "method">,
  ): Promise<IHttpResponse<T, IHttpError>> {
    return this.fetcher<T>(props.url, "POST", { ...props });
  }

  async put<T>(
    props: Omit<HttpAgentProps, "method">,
  ): Promise<IHttpResponse<T, IHttpError>> {
    return this.fetcher<T>(props.url, "PUT", { ...props });
  }

  async delete<T>(
    props: Omit<HttpAgentProps, "method">,
  ): Promise<IHttpResponse<T, IHttpError>> {
    return this.fetcher<T>(props.url, "DELETE", { ...props });
  }

  async patch<T>(
    props: Omit<HttpAgentProps, "method">,
  ): Promise<IHttpResponse<T, IHttpError>> {
    return this.fetcher<T>(props.url, "PATCH", { ...props });
  }
}

export default HttpAgent;
