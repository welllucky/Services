import { TicketEventDto } from "@/types";
import {
  InfoUnityContainer,
  InfoUnityDescription,
  InfoUnityIcon,
  InfoUnityId,
} from "./styles";

export const InfoUnity = ({ description, id }: TicketEventDto) =>
  description && (
    <InfoUnityContainer>
      <InfoUnityIcon />
      <InfoUnityId>{`#${id || 0}`}</InfoUnityId>
      <InfoUnityDescription>{description}</InfoUnityDescription>
    </InfoUnityContainer>
  );
