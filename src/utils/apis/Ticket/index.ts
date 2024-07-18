/* eslint-disable max-len */
import { IOpenTicketForm } from "@/app/(protected)/(form)/template";
import { ITicket } from "@/types";
import { httpClient } from "@/utils/abstractions";

/**
 * The `TicketApi` class provides methods to interact with the tickets API, including fetching and creating tickets.
 */
export class TicketApi {
  private readonly base_url: string | undefined;

  private readonly api_url: string;

  constructor() {
    this.base_url = process.env.NEXT_PUBLIC_BASE_URL;
    this.api_url = `${this.base_url}api/tickets/`;
  }

  /**
   * Fetches a single ticket by its ID.
   * @param {string} id The ID of the ticket to fetch.
   * @returns An object containing the ticket data, any error that occurred, and a loading state.
   */
  getTicket = (id: string) => {
    const { data, error, isLoading } = httpClient<ITicket>(
      `${this.api_url}${id}`,
    );
    return { data, error, isLoading };
  };

  /**
   * Fetches all available tickets.
   * @returns An object containing an array of ticket data, any error that occurred, and a loading state.
   */
  getTickets = () => {
    const { data, error, isLoading } = httpClient<ITicket[]>(`${this.api_url}`);
    return { data, error, isLoading };
  };

  /**
   * Creates a new ticket with the given data.
   * @param {IOpenTicketForm} ticketData The data for the ticket to be created.
   * @returns An object containing any error that occurred and a loading state.
   */
  createTicket = (ticketData: IOpenTicketForm) => {
    const { error, isLoading } = httpClient(
      `${this.api_url}?Ticket_id`,
      "POST",
      { ...ticketData },
    );
    return { error, isLoading };
  };
}
