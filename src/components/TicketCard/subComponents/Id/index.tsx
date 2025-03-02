import { buildTestIds } from "@/utils";
import { TicketNumber } from "./styles";

type IdProps = {
  id: number | string;
};

export const Id = ({ id }: IdProps) => (
  <TicketNumber {...buildTestIds("ticket-card-number")}>
    {`Chamado Nº ${id}`}
  </TicketNumber>
);
