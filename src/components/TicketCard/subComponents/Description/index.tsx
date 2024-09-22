import { buildTestIds } from "@/utils";
import { TicketDescription } from "./styles";

type DescriptionProps = {
  description: string;
};

export const Description = ({ description }: DescriptionProps) => (
  <TicketDescription {...buildTestIds("issue-description")}>
    {description}
  </TicketDescription>
);
