import {
  InfoUnityContainer,
  InfoUnityDescription,
  InfoUnityIcon,
  InfoUnityId,
} from "./styles";

export interface InfoUnityProps {
  id: string;
  description: string;
  icon?: string;
}

export function InfoUnity({ icon, description, id }: InfoUnityProps) {
  return (
    description && (
      <InfoUnityContainer>
        {icon && <InfoUnityIcon />}
        <InfoUnityId>{`#${id || 0}`}</InfoUnityId>
        <InfoUnityDescription>{description}</InfoUnityDescription>
      </InfoUnityContainer>
    )
  );
}
