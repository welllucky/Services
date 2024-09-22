import { IssueStatus } from "@/types";
import { buildTestIds } from "@/utils";
import {
  TicketContainer,
  TicketContent,
  TicketState,
  TicketWrapper,
} from "./styles";
import { Description, Id, Info, Signal } from "./subComponents";

export type TicketCardProps = {
  id: string;
  nome: string;
  date: string;
  $status: IssueStatus;
  isUpdated?: boolean;
  color?: string;
  $borderColor?: string;
  isSelected?: boolean;
  href: string;
};

const TicketCard = ({
  id,
  nome,
  date,
  $status,
  isUpdated,
  color,
  $borderColor,
  href,
}: TicketCardProps) => (
  <TicketWrapper
    {...buildTestIds("issue-wrapper")}
    color={color}
    $status={$status}
    $borderColor={$borderColor}
    $hasUpdate={isUpdated}
    href={href}>
    {isUpdated && <Signal />}
    <TicketContainer {...buildTestIds("issue-container")}>
      <TicketContent
        {...buildTestIds("issue-content")}
        $hasUpdate={isUpdated}>
        <Id id={id} />
        <Description description={nome} />
      </TicketContent>
      <TicketState {...buildTestIds("issue-state")}>
        <Info
          label="Aberto em:"
          text={date}
        />
        <Info
          label="Status"
          text={$status}
        />
      </TicketState>
    </TicketContainer>
  </TicketWrapper>
);

export { TicketCard };
