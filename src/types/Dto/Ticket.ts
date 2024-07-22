export type IssueStatus = "notStarted" | "inProgress" | "blocked" | "closed";
export type TicketType = "task" | "incident" | "problem" | "change";
export type PriorityLevels = "low" | "medium" | "high";

export type TicketEventDto = {
  icon?: string;
  id: string;
  description: string;
};

export interface TicketDto {
  id: string;
  resume: string;
  description: string;
  date: string;
  historic?: TicketEventDto[];
  priority: PriorityLevels;
  type: TicketType;
  status: IssueStatus;
  createdAt: Date;
  updatedAt: Date;
  closedAt?: Date | null;
  createdBy: number;
  updatedBy: number;
  closedBy: number | null;
}
