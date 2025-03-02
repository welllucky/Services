import { buildTestIds } from "@/utils";
import { TicketDescription } from "./styles";

type DescriptionProps = {
  description: string;
};

export const Description = ({ description }: DescriptionProps) => (
  <TicketDescription {...buildTestIds("ticket-card-description")}>
    {description}
  </TicketDescription>
);
