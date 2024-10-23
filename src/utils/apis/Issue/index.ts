/* eslint-disable max-len */
import { IOpenIssueForm, IssueDto } from "@/types";
import { httpClient } from "@/utils/abstractions";

/**
 * The `IssueApi` class provides methods to interact with the issues API, including fetching and creating issues.
 */
export class IssueApi {
  private readonly base_url: string | undefined;

  private readonly api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/issues`;
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

    return httpClient.get<IssueDto>({
      url: `${this.api_url}/${id}`,
    });
  };

  /**
   * Fetches all available issues.
   * @returns An object containing an array of issue data, any error that occurred, and a loading state.
   */
  getIssues = () => {
    const response = httpClient.get<IssueDto[]>({
      url: `${this.api_url}`,
      options: { refreshInterval: true },
    });
    return response;
  };

  /**
   * Creates a new issue with the given data.
   * @param {IOpenIssueForm} issueData The data for the issue to be created.
   * @returns An object containing any error that occurred and a loading state.
   */
  createIssue = (issueData: IOpenIssueForm, shouldFetch = false) =>
    httpClient.post<{ id: string | number }>({
      url: `${this.api_url}/create`,
      body: {
        ...issueData,
      },
      shouldFetch,
    });

  getInProgressIssues = () =>
    httpClient.get<IssueDto[]>({
      url: `${this.api_url}/inProgress`,
    });

  closeIssue = (id: string, shouldFetcher = false) =>
    httpClient.post<{ id: string }>({
      url: `${this.api_url}/${id}/close`,
      shouldFetch: shouldFetcher,
    });

  reopenIssue = (id: string, shouldFetcher = false) =>
    httpClient.post<{ id: string }>({
      url: `${this.api_url}/${id}/reopen`,
      shouldFetch: shouldFetcher,
    });

  startIssue = (id: string, shouldFetcher = false) =>
    httpClient.post<{ id: string }>({
      url: `${this.api_url}/${id}/start`,
      shouldFetch: shouldFetcher,
    });
}
