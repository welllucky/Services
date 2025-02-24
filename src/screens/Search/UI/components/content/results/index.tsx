import { TicketCard } from "@/components";
import { TicketDto } from "@/types";

interface ResultsProps {
  result: TicketDto[] | undefined;
}

export const Results = ({ result }: ResultsProps) => {
  if (result && result?.length !== 0) {
    return result?.map((issue) => (
      <TicketCard
        key={issue.id}
        id={issue.id}
        name={issue.resume}
        date={issue.date}
        $status={issue.status}
        href={`/ticket/${issue.id}`}
      />
    ));
  }

  return null;
};
