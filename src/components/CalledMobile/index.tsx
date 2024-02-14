import {
  IssueContainer,
  IssueContent,
  IssueNumber,
  IssueDescription,
  IssueState,
  IssueStatus,
  OpeningText,
  StatusText,
  IconeSelo,
  IssueWrapper,
  InfoLabel
} from "./styles";
import { Selo } from "@/assets/Icons";
import { IssueMobileProps } from "@/assets";

export const IssueMobile = ({
  id,
  nome,
  date,
  $status,
  isUpdated,
  color,
  $borderColor
}: IssueMobileProps) => {
  return (
    <IssueWrapper href={`/chamado/${id}`}>
      {isUpdated && (
        <IconeSelo>
          <Selo />
        </IconeSelo>
      )}
      <IssueContainer
        color={color}
        $borderColor={$borderColor}
        $hasUpdate={isUpdated}>
        <IssueContent $hasUpdate={isUpdated}>
          <IssueNumber>{`Chamado Nº ${id}`}</IssueNumber>
          <IssueDescription>{nome}</IssueDescription>
        </IssueContent>
        <IssueState>
          <IssueStatus>
            <InfoLabel>Aberto em:</InfoLabel>
            <OpeningText>{date}</OpeningText>
          </IssueStatus>
          <IssueStatus>
            <InfoLabel>Status</InfoLabel>
            <StatusText>{$status}</StatusText>
          </IssueStatus>
        </IssueState>
      </IssueContainer>
    </IssueWrapper>
  );
};
