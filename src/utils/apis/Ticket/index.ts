import { ITicket, TicketDto } from "@/types";
import { httpClient } from "@/utils/abstractions/httpClient";

type InitializeTicketType = {
  issueId: string;
};

/**
 * Represents the API for managing tickets, providing methods to fetch and initialize tickets.
 */
export class TicketApi {
  private readonly base_url: string | undefined;

  private readonly api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/tickets`;
  }

  /**
   * Get a specific issue by its ID.
   * @param {string} id The unique identifier of the issue to fetch.
   * @returns An object containing the issue data, any error, and loading state.
   */
  getTicket = (id: string) => {
    const { data, error, isLoading } = httpClient.get<ITicket>({
      url: `${this.api_url}/${id}`,
    });
    return { data, error, isLoading };
  };

  /**
   * Retrieve all tickets.
   * @returns An object containing an array of issue data, any error, and loading state.
   */
  getTickets = () => {
    const { data, error, isLoading } = httpClient.get<TicketDto[]>({
      url: `${this.api_url}`,
      options: { refreshInterval: false },
    });

    return { data, error, isLoading };
  };

  /**
   * Initialize a new issue with the provided data.
   * @param {InitializeTicketType} TicketData The data to initialize the issue with.
   * @returns A promise resolving with the result of the initialization request.
   */
  initializeTicket = (TicketData: InitializeTicketType) =>
    httpClient.put({
      url: `${this.api_url}`,
      body: {
        ...TicketData,
      },
    });
}
