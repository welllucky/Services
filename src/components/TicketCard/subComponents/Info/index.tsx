import { buildTestIds } from "@/utils";
import { InfoLabel, InfoText, InfoContainer } from "./styles";

interface StatusProps {
    label: string;
    text: string;
}

export const Info = ({ label, text }: StatusProps) => {
  return (
    <InfoContainer {...buildTestIds("issue-status")}>
      <InfoLabel {...buildTestIds("info-label")}>{label}</InfoLabel>
      <InfoText {...buildTestIds("opening-text")}>{text}</InfoText>
    </InfoContainer>
  );
};
