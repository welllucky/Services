import { InfoDisplayProps } from "@/assets";
import { Selo } from "@/assets/Icons";
import { buildTestIds } from "@/utils";
import {
  IconeSelo,
  InfoLabel,
  IssueContainer,
  IssueContent,
  IssueDescription,
  IssueNumber,
  IssueState,
  IssueStatus,
  IssueWrapper,
  OpeningText,
  StatusText,
} from "./styles";

/**
 * Displays information based on the provided parameters.
 * @param {Object} props - The properties passed to the InfoDisplay function.
 * @param {string} props.id - The unique identifier for the information.
 * @param {string} props.nome - The name associated with the information.
 * @param {Date} props.date - The date related to the information.
 */
const InfoDisplay = ({
  id,
  nome,
  date,
  $status,
  isUpdated,
  color,
  $borderColor,
}: Readonly<InfoDisplayProps>) => {
  return (
    <IssueWrapper
      {...buildTestIds("issue-wrapper")}
      color={color}
      $borderColor={$borderColor}
      $hasUpdate={isUpdated}
      href={`/chamado/${id}`}>
      {isUpdated && (
        <IconeSelo {...buildTestIds("icone-selo")}>
          <Selo />
        </IconeSelo>
      )}
      <IssueContainer {...buildTestIds("issue-container")}>
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

export { InfoDisplay };
