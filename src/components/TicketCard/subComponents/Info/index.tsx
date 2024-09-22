import { buildTestIds } from "@/utils";
import { InfoContainer, InfoLabel, InfoText } from "./styles";

interface StatusProps {
  label: string;
  text: string;
}

export const Info = ({ label, text }: StatusProps) => (
  <InfoContainer {...buildTestIds("issue-status")}>
    <InfoLabel {...buildTestIds("info-label")}>{label}</InfoLabel>
    <InfoText {...buildTestIds("opening-text")}>{text}</InfoText>
  </InfoContainer>
);
