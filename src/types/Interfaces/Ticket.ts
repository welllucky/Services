type IssueStatus = "notStarted" | "inProgress" | "blocked" | "closed";
type TicketType = "task" | "incident" | "problem" | "change";
type PriorityLevels = "low" | "medium" | "high";

export interface ITicket {
  id: string;
  resume: string;
  description: string;
  date: string;
  priority: PriorityLevels;
  resolverId: number;
  type: TicketType;
  status: IssueStatus;
  createdAt: Date;
  updatedAt: Date;
  closedAt?: Date | null;
  createdBy: number;
  updatedBy: number;
  closedBy?: number | null;
}
