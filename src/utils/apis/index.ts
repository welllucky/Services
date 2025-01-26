import { httpClient } from "@/implementations/client";
import { IssueApi } from "./Issue.api";
import { SearchApi } from "./Search.api";
import { SectorApi } from "./Sector.api";
import { SessionApi } from "./Session.api";
import { TicketApi } from "./Ticket.api";
import { UserApi } from "./User.api";

export const ticketApi = new TicketApi(httpClient);
export const issueApi = new IssueApi(httpClient);
export const searchApi = new SearchApi(httpClient);
export const userApi = new UserApi(httpClient);
export const sessionApi = new SessionApi(httpClient);
export const sectorApi = new SectorApi(httpClient);
