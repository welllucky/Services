import { Selo } from "@/assets/Icons";
import { IssueDisplayProps } from "@/assets";
import { buildTestIds } from "@/utils";
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

const IssueDisplay = ({
  id,
  nome,
  date,
  $status,
  isUpdated,
  color,
  $borderColor,
}: Readonly<IssueDisplayProps>) => {
  return (
    <IssueWrapper
      {...buildTestIds("issue-wrapper")}
      href={`/chamado/${id}`}>
      {isUpdated && (
        <IconeSelo {...buildTestIds("icone-selo")}>
          <Selo />
        </IconeSelo>
      )}
      <IssueContainer
        {...buildTestIds("issue-container")}
        color={color}
        $borderColor={$borderColor}
        $hasUpdate={isUpdated}>
        <IssueContent
          {...buildTestIds("issue-content")}
          $hasUpdate={isUpdated}>
          <IssueNumber {...buildTestIds("issue-number")}>
            {`Chamado Nº ${id}`}
          </IssueNumber>
          <IssueDescription {...buildTestIds("issue-description")}>
            {nome}
          </IssueDescription>
        </IssueContent>
        <IssueState {...buildTestIds("issue-state")}>
          <IssueStatus {...buildTestIds("issue-status")}>
            <InfoLabel {...buildTestIds("info-label")}>Aberto em:</InfoLabel>
            <OpeningText {...buildTestIds("opening-text")}>{date}</OpeningText>
          </IssueStatus>
          <IssueStatus {...buildTestIds("issue-status")}>
            <InfoLabel {...buildTestIds("info-label")}>Status</InfoLabel>
            <StatusText {...buildTestIds("status-text")}>{$status}</StatusText>
          </IssueStatus>
        </IssueState>
      </IssueContainer>
    </IssueWrapper>
  );
};

export default IssueDisplay;
