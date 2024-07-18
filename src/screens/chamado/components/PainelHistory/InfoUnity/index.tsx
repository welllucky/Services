import { InfoUnityProps } from "@/types";
import {
  InfoUnityContainer,
  InfoUnityDescription,
  InfoUnityIcon,
  InfoUnityId,
} from "./styles";

export const InfoUnity = ({ icon, description, id }: InfoUnityProps) => {
  return (
    description && (
      <InfoUnityContainer>
        {icon && <InfoUnityIcon />}
        <InfoUnityId>{`#${id || 0}`}</InfoUnityId>
        <InfoUnityDescription>{description}</InfoUnityDescription>
      </InfoUnityContainer>
    )
  );
};
