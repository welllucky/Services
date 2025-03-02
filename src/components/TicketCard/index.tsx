import { TicketStatus } from "@/types";
import { buildTestIds, dataFormatter } from "@/utils";
import { useMemo } from "react";
import {
  TicketContainer,
  TicketContent,
  TicketState,
  TicketWrapper,
} from "./styles";
import { Description, Id, Info, Signal } from "./subComponents";

export type TicketCardProps = {
  id: string;
  name: string;
  date: string;
  $status: TicketStatus;
  isUpdated?: boolean;
  color?: string;
  $borderColor?: string;
  isSelected?: boolean;
  href: string;
};

const TicketCard = ({
  id,
  name,
  date,
  $status,
  isUpdated,
  color,
  $borderColor,
  href,
}: TicketCardProps) => {
  const formattedDate = useMemo(
    () => (date ? dataFormatter(date) : ""),
    [date],
  );

  return (
    <TicketWrapper
      {...buildTestIds("ticket-card")}
      color={color}
      $status={$status}
      $borderColor={$borderColor}
      $hasUpdate={isUpdated}
      href={href}>
      {isUpdated && <Signal />}
      <TicketContainer {...buildTestIds("ticket-container")}>
        <TicketContent
          {...buildTestIds("ticket-content")}
          $hasUpdate={isUpdated}>
          <Id id={id} />
          <Description description={name} />
        </TicketContent>
        <TicketState {...buildTestIds("ticket-state")}>
          {formattedDate && (
            <Info
              label="Aberto em"
              text={formattedDate}
            />
          )}

          {$status && (
            <Info
              label="Status"
              text={$status}
              hasHighlight
            />
          )}
        </TicketState>
      </TicketContainer>
    </TicketWrapper>
  );
};

export { TicketCard };
