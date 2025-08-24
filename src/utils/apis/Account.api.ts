import { appMonitoringServer } from "@/implementations/server";
import { CreateAccountDto, IHttpError, IHttpResponse, IUser } from "@/types";
import { IHttpClient } from "@/types/abstractions";

export class AccountApi {
  private readonly base_url: string | undefined;

  private readonly apiUrl: string;

  private readonly altApiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.base_url}/api/account`;
    this.altApiUrl = `${this.base_url}/api/public/account`;
    this.httpClient = httpClient;
  }

  create = async ({
    data,
  }: {
    data: CreateAccountDto;
  }): Promise<IHttpResponse<IUser, IHttpError>> => {
    const maskedEmail = data.email ? `${data.email.substring(0, 3)}***` : "empty";
    const maskedName = data.name ? `${data.name.substring(0, 3)}***` : "empty";

    appMonitoringServer.addBreadcrumb({
      message: "Account creation API call started",
      category: "auth.register.api",
      level: "info",
      data: {
        email: maskedEmail,
        name: maskedName,
        sector: data.sector,
        position: data.position,
        url: this.altApiUrl,
      },
    });

    try {
      const res = await fetch(this.altApiUrl, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      appMonitoringServer.addBreadcrumb({
        message: "Account creation API response received",
        category: "auth.register.api",
        level: "info",
        data: {
          email: maskedEmail,
          statusCode: res.status,
          statusText: res.statusText,
          ok: res.ok,
        },
      });

      const resBody = (await res.json()) as IHttpResponse<IUser, IHttpError>;

      if (res.status === 201 && resBody.data) {
        appMonitoringServer.addBreadcrumb({
          message: "Account created successfully via API",
          category: "auth.register.api.success",
          level: "info",
          data: {
            email: maskedEmail,
            userId: resBody.data.register,
          },
        });

        appMonitoringServer.addBreadcrumb({
          message: "Account created successfully",
          category: "auth.register.api.success",
          level: "info",
          data: {
            source: "account_api",
            action: "create",
            status: "success",
          }
        });
      } else {
        appMonitoringServer.addBreadcrumb({
          message: "Account creation failed via API",
          category: "auth.register.api.error",
          level: "error",
          data: {
            email: maskedEmail,
            statusCode: res.status,
            errorMessage: resBody.error?.message,
            serverMessage: resBody.message,
          },
        });

        appMonitoringServer.captureException(`Account creation failed: ${resBody.error?.message || "Unknown error"}`, {
          tags: {
            source: "account_api",
            action: "create",
            status: "failed",
            httpStatus: res.status,
            email: maskedEmail,
            ...(resBody.error?.message && { errorMessage: resBody.error?.message }),
            ...(resBody.message && { serverMessage: resBody.message }),
          },
        });
      }

      return {
        data: resBody.data,
        error: resBody.error,
        status: res.status,
        message: resBody.message,
      };
    } catch (error) {
      appMonitoringServer.addBreadcrumb({
        message: "Account creation API exception",
        category: "auth.register.api.error",
        level: "error",
        data: {
          email: maskedEmail,
          errorMessage: (error as Error).message,
        },
      });

      appMonitoringServer.captureException(error, {
        tags: {
          source: "account_api",
          action: "create",
          email: maskedEmail,
          url: this.altApiUrl,
        },
      });

      throw error;
    }
  };
}
