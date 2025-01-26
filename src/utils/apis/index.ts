import { IssueApi } from "./Issue.api";
import { SearchApi } from "./Search.api";
import { SessionApi } from "./Session.api";
import { TicketApi } from "./Ticket.api";
import { UserApi } from "./User.api";

export const ticketApi = new TicketApi();
export const issueApi = new IssueApi();
export const searchApi = new SearchApi();
export const userApi = new UserApi();
export const sessionApi = new SessionApi();
