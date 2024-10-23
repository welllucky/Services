import { TicketApi } from "./Ticket";
import { SearchApi } from "./Search";
import { IssueApi } from "./Issue";

export const ticketApi = new TicketApi();
export const issueApi = new IssueApi();
export const searchApi = new SearchApi();
