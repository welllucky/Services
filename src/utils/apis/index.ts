import { IssueApi } from "./Issue";
import { SearchApi } from "./Search";
import { TicketApi } from "./Ticket";

export const issueApi = new IssueApi();
export const ticketApi = new TicketApi();
export const searchApi = new SearchApi();
