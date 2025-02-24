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
          <Description description={name} />
        </TicketContent>
        <TicketState {...buildTestIds("issue-state")}>
          {formattedDate && (
            <Info
              label="Aberto em:"
              text={formattedDate}
            />
          )}

          <Info
            label="Status"
            text={$status}
          />
        </TicketState>
      </TicketContainer>
    </TicketWrapper>
  );
};

export { TicketCard };
