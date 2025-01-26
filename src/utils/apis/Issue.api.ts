import { IHttpClient } from "@/implementations/client/interfaces";
import { IOpenIssueForm, IssueDto } from "@/types";

/**
 * The `IssueApi` class provides methods to interact with the issues API, including fetching and creating issues.
 */
export class IssueApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/issues`;
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

    return this.httpClient.get<IssueDto>({
      url: `${this.apiUrl}/${id}`,
    });
  };

  /**
   * Fetches all available issues.
   * @returns An object containing an array of issue data, any error that occurred, and a loading state.
   */
  getIssues = () =>
    this.httpClient.get<IssueDto[]>({
      url: `${this.apiUrl}`,
      options: { refreshInterval: true },
    });

  /**
   * Creates a new issue with the given data.
   * @param {IOpenIssueForm} issueData The data for the issue to be created.
   * @param shouldFetch
   * @returns An object containing any error that occurred and a loading state.
   */
  createIssue = (issueData: IOpenIssueForm, shouldFetch = false) =>
    this.httpClient.post<{ id: string | number }>({
      url: `${this.apiUrl}`,
      body: {
        ...issueData,
      },
      shouldFetch,
    });

  getInProgressIssues = () =>
    this.httpClient.get<IssueDto[]>({
      url: `${this.apiUrl}/inProgress`,
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
