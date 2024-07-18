import { ITicket } from "@/types";
import { httpClient } from "@/utils/abstractions";

type InitializeIssueType = {
  issueId: string;
};

/**
 * Represents the API for managing issues, providing methods to fetch and initialize issues.
 */
export class IssueApi {
  private readonly base_url: string | undefined;

  private readonly api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/issues/`;
  }

  /**
   * Get a specific issue by its ID.
   * @param {string} id The unique identifier of the issue to fetch.
   * @returns An object containing the issue data, any error, and loading state.
   */
  getIssue = (id: string) => {
    const { data, error, isLoading } = httpClient<ITicket>(
      `${this.api_url}${id}`,
    );
    return { data, error, isLoading };
  };

  /**
   * Retrieve all issues.
   * @returns An object containing an array of issue data, any error, and loading state.
   */
  getIssues = () => {
    const { data, error, isLoading } = httpClient<ITicket[]>(`${this.api_url}`);
    return { data, error, isLoading };
  };

  /**
   * Initialize a new issue with the provided data.
   * @param {InitializeIssueType} IssueData The data to initialize the issue with.
   * @returns A promise resolving with the result of the initialization request.
   */
  initializeIssue = async (IssueData: InitializeIssueType) => {
    return httpClient(`${this.api_url}`, "PUT", {
      ...IssueData,
    });
  };
}
