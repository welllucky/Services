import { Selo } from "@/assets/Icons";
import { IssueDisplayProps } from "@/assets";
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
  InfoLabel,
} from "./styles";

export function IssueDisplay({
  id,
  nome,
  date,
  $status,
  isUpdated,
  color,
  $borderColor,
}: IssueDisplayProps) {
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
        $hasUpdate={isUpdated}
      >
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
}
