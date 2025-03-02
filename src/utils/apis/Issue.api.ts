import { defaultHeaders } from "@/constraints";
import { IHttpError, IHttpResponse, IOpenTicketForm, TicketDto } from "@/types";
import { IHttpClient } from "@/types/abstractions";

/**
 * The `IssueApi` class provides methods to interact with the issues API, including fetching and creating issues.
 */
export class IssueApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/tickets`;
    this.httpClient = httpClient;
  }

  /**
   * Fetches a single issue by its ID.
   * @param {string} id The ID of the issue to fetch.
   * @returns An object containing the issue data, any error that occurred, and a loading state.
   */
  getIssue = (id: string) => {
    if (!id) {
      return {
        data: undefined,
        error: { message: "ID is required" },
        isLoading: false,
      };
    }

    return this.httpClient.get<TicketDto>({
      url: `${this.apiUrl}/${id}`,
    });
  };

  getIssuesEndpoint = () => this.apiUrl;

  /**
   * Fetches all available issues.
   * @returns An object containing an array of issue data, any error that occurred, and a loading state.
   */
  getIssues = (accessToken: string) =>
    this.httpClient.get<TicketDto[]>({
      url: this.getIssuesEndpoint(),
      options: { refreshInterval: true },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

  createIssueUrl = () => `${this.apiUrl}`;

  /**
   * Creates a new issue with the given data.
   * @param {IOpenTicketForm} issueData The data for the issue to be created.
   * @param shouldFetch
   * @returns An object containing any error that occurred and a loading state.
   */
  createIssue = (issueData: IOpenTicketForm, shouldFetch = false) =>
    this.httpClient.post<{ id: string | number }>({
      url: this.apiUrl,
      body: {
        ...issueData,
      },
      shouldFetch,
    });

  getInProgressIssuesEndpoint = () => `${this.apiUrl}/inProgress`;

  getInProgressIssues = (accessToken: string) =>
    this.httpClient.get<IHttpResponse<TicketDto[], IHttpError>>({
      url: this.getInProgressIssuesEndpoint(),
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
    });

  closeIssue = (id: string, shouldFetcher = false) =>
    this.httpClient.post<{ id: string }>({
      url: `${this.apiUrl}/${id}/close`,
      shouldFetch: shouldFetcher,
    });

  reopenIssue = (id: string, shouldFetcher = false) =>
    this.httpClient.post<{ id: string }>({
      url: `${this.apiUrl}/${id}/reopen`,
      shouldFetch: shouldFetcher,
    });

  startIssue = (id: string, shouldFetcher = false) =>
    this.httpClient.post<{ id: string }>({
      url: `${this.apiUrl}/${id}/start`,
      shouldFetch: shouldFetcher,
    });
}
