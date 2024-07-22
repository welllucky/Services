import { TicketEventDto } from "@/assets";
import {
  InfoUnityContainer,
  InfoUnityDescription,
  InfoUnityIcon,
  InfoUnityId,
} from "./styles";

export const InfoUnity = ({ icon, description, id }: TicketEventDto) => (
    description && (
      <InfoUnityContainer>
        {icon && <InfoUnityIcon />}
        <InfoUnityId>{`#${id || 0}`}</InfoUnityId>
        <InfoUnityDescription>{description}</InfoUnityDescription>
      </InfoUnityContainer>
    )
  );
