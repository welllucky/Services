import AppDataSource from "@/database";
import { Event, Session, Ticket, User } from "../entities";
import { EventRepository } from "./Event";
import { IssueRepository } from "./Issue";
import { SearchRepository } from "./Search";
import { SessionRepository } from "./Session";
import { TicketRepository } from "./Ticket";
import { UserRepository } from "./User";

export const eventRepository = new EventRepository(AppDataSource, Event);
export const issueRepository = new IssueRepository(AppDataSource, Ticket);
export const searchRepository = new SearchRepository(AppDataSource, Ticket);
export const ticketRepository = new TicketRepository(AppDataSource, Ticket);
export const userRepository = new UserRepository(AppDataSource, User);
export const sessionRepository = new SessionRepository(AppDataSource, Session);
