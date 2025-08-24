import { httpClient } from "@/implementations/client";

import { AccountApi } from "./Account.api";
import { EnterpriseApi } from "./Enterprise.api";
import ResolverApi from "./Resolver.api";
import { SearchApi } from "./Search.api";
import { SessionApi } from "./Session.api";
import TicketApi from "./Ticket.api";
import { UserApi } from "./User.api";

export const ticketApi = new TicketApi(httpClient);
export const searchApi = new SearchApi(httpClient);
export const userApi = new UserApi(httpClient);
export const sessionApi = new SessionApi(httpClient);
export const enterpriseApi = new EnterpriseApi(httpClient, "l3");
export const accountApi = new AccountApi(httpClient);
export const resolveApi = new ResolverApi(httpClient);
