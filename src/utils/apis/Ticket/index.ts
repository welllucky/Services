/* eslint-disable max-len */
import { IOpenTicketForm, TicketDto } from "@/types";
import { httpClient } from "@/utils/abstractions";

/**
 * The `TicketApi` class provides methods to interact with the tickets API, including fetching and creating tickets.
 */
export class TicketApi {
  private readonly base_url: string | undefined;

  private readonly api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/tickets`;
  }

  /**
   * Fetches a single ticket by its ID.
   * @param {string} id The ID of the ticket to fetch.
   * @returns An object containing the ticket data, any error that occurred, and a loading state.
   */
  getTicket = (id: string) => {
    if (!id) {
      return {
        data: undefined,
        error: { message: "ID is required" },
        isLoading: false,
      };
    }

    return httpClient.get<TicketDto>({
      url: `${this.api_url}/${id}`,
    });
  };

  /**
   * Fetches all available tickets.
   * @returns An object containing an array of ticket data, any error that occurred, and a loading state.
   */
  getTickets = () => {
    const response = httpClient.get<TicketDto[]>({
      url: `${this.api_url}`,
      options: { refreshInterval: true },
    });
    return response;
  };

  /**
   * Creates a new ticket with the given data.
   * @param {IOpenTicketForm} ticketData The data for the ticket to be created.
   * @returns An object containing any error that occurred and a loading state.
   */
  createTicket = (ticketData: IOpenTicketForm, shouldFetch = false) =>
    httpClient.post<{ id: string | number }>({
      url: `${this.api_url}/create`,
      body: {
        ...ticketData,
      },
      shouldFetch,
    });
}
