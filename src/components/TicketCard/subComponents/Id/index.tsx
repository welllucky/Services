import { buildTestIds } from "@/utils";
import { TicketNumber } from "./styles";

type IdProps = {
    id: number | string;
}

export const Id = ({ id }: IdProps) => {
  return (
    <TicketNumber {...buildTestIds("issue-number")}>
      {`Chamado Nº ${id}`}
    </TicketNumber>
  );
};
