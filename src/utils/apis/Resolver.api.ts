// eslint-disable-next-line import/no-unresolved
import { IHttpClient, ITicket, TicketDto } from "@/types";

type InitializeTicketType = {
  issueId: string;
};

/**
 * Represents the API for managing tickets, providing methods to fetch and initialize tickets.
 */
class ResolverApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}/api/tickets`;
    this.httpClient = httpClient;
  }

  getTicketEndpoint = (id: string) => `${this.apiUrl}/${id}`;

  /**
   * Get a specific issue by its ID.
   * @param {string} id The unique identifier of the issue to fetch.
   * @returns An object containing the issue data, any error, and loading state.
   */
  getTicket = (id: string) => {
    const { data, error, isLoading } = this.httpClient.get<ITicket>({
      url: this.getTicketEndpoint(id),
    });
    return { data, error, isLoading };
  };

  /**
   * Retrieve all tickets.
   * @returns An object containing an array of issue data, any error, and loading state.
   */
  getTickets = (shouldFetch: boolean) =>
    this.httpClient.get<TicketDto[]>({
      url: `${this.apiUrl}`,
      shouldFetch,
    });

  /**
   * Initialize a new issue with the provided data.
   * @param {InitializeTicketType} TicketData The data to initialize the issue with.
   * @returns A promise resolving with the result of the initialization request.
   */
  initializeTicket = (TicketData: InitializeTicketType) =>
    this.httpClient.put({
      url: `${this.apiUrl}`,
      body: {
        ...TicketData,
      },
    });
}

export default ResolverApi;
