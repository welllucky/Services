import { useCallback } from "react";

import { TicketCard } from "@/components";
import { TicketDto } from "@/types";
import { useAuth } from "@/utils";

interface ResultsProps {
  result: TicketDto[] | undefined;
}

const Results = ({ result }: ResultsProps) => {
  const { user } = useAuth();

  const getTicketPage = useCallback((ticket: TicketDto) => {
    return user?.register === ticket.createdBy ? "ticket" : "issue";
  }, [user?.register]);

  if (result && result?.length !== 0) {
    return result?.map((ticket) => (
      <TicketCard
        key={ticket.id}
        id={ticket.id}
        name={ticket.resume}
        date={ticket.date}
        $status={ticket.status}
        href={`/${getTicketPage(ticket)}/${ticket.id}`}
      />
    ));
  }

  return null;
};

export { Results };
