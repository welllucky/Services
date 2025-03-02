import { buildTestIds } from "@/utils";
import { InfoContainer, InfoLabel, InfoText } from "./styles";

interface StatusProps {
  label: string;
  text: string;
  hasHighlight?: boolean;
}

export const Info = ({ label, text, hasHighlight }: StatusProps) => (
  <InfoContainer {...buildTestIds("ticket-card-info")}>
    <InfoLabel {...buildTestIds("ticket-card-info-label")}>{label}</InfoLabel>
    <InfoText
      hasHighlight={hasHighlight}
      {...buildTestIds("ticket-card-info-text")}>
      {text}
    </InfoText>
  </InfoContainer>
);
