import { defaultHeaders } from "@/constraints";
import { IHttpError, IHttpResponse, IOpenTicketForm, TicketDto } from "@/types";
import { IHttpClient } from "@/types/abstractions";

/**
 * The `TicketApi` class provides methods to interact with the Tickets API, including fetching and creating Tickets.
 */
class TicketApi {
  private readonly baseUrl: string | undefined;

  private readonly apiUrl: string;

  private readonly httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    this.apiUrl = `${this.baseUrl}api/tickets`;
    this.httpClient = httpClient;
  }

  getTicketEndpoint = (id: string, isSolver: boolean = false) =>
    `${this.apiUrl}/${id}?isSolver=${isSolver}`;

  /**
   * Fetches a single Ticket by its ID.
   * @param {string} id The ID of the Ticket to fetch.
   * @returns An object containing the Ticket data, any error that occurred, and a loading state.
   */
  getTicket = (id: string, isSolver?: boolean) => {
    if (!id) {
      return {
        data: undefined,
        error: { message: "ID is required" },
        isLoading: false,
      };
    }

    return this.httpClient.get<TicketDto>({
      url: this.getTicketEndpoint(id, isSolver),
    });
  };

  getTicketsEndpoint = (isSolver?: boolean) => {
    return `${this.apiUrl}?isSolver=${isSolver}`;
  };

  /**
   * Fetches all available Tickets.
   * @returns An object containing an array of Ticket data, any error that occurred, and a loading state.
   */
  getTickets = (accessToken: string, isSolver: boolean) =>
    this.httpClient.get<TicketDto[]>({
      url: this.getTicketsEndpoint(isSolver),
      options: { refreshInterval: true },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

  createTicketUrl = () => `${this.apiUrl}`;

  /**
   * Creates a new Ticket with the given data.
   * @param {IOpenTicketForm} TicketData The data for the Ticket to be created.
   * @param shouldFetch
   * @returns An object containing any error that occurred and a loading state.
   */
  createTicket = (TicketData: IOpenTicketForm, shouldFetch = false) =>
    this.httpClient.post<{ id: string | number }>({
      url: this.apiUrl,
      body: {
        ...TicketData,
      },
      shouldFetch,
    });

  getInProgressTicketsEndpoint = () => `${this.apiUrl}/inProgress`;

  getInProgressTickets = (accessToken: string) =>
    this.httpClient.get<IHttpResponse<TicketDto[], IHttpError>>({
      url: this.getInProgressTicketsEndpoint(),
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${accessToken}`,
      },
    });

  closeTicket = (id: string, shouldFetcher = false) =>
    this.httpClient.post<{ id: string }>({
      url: `${this.apiUrl}/${id}/close`,
      shouldFetch: shouldFetcher,
    });

  reopenTicket = (id: string, shouldFetcher = false) =>
    this.httpClient.post<{ id: string }>({
      url: `${this.apiUrl}/${id}/reopen`,
      shouldFetch: shouldFetcher,
    });

  startTicket = (id: string, shouldFetcher = false) =>
    this.httpClient.post<{ id: string }>({
      url: `${this.apiUrl}/${id}/start`,
      shouldFetch: shouldFetcher,
    });
}

export default TicketApi;
