import { FileDashed } from "@phosphor-icons/react";
import { InfoUnity, InfoUnityProps } from "./InfoUnity";
import {
  InfoHistoryPainelContainer,
  InfoHistoryPainelContent,
  InfoHistoryPainelTitle
} from "./styles";
import { Loading, NoContent } from "..";
import { useTheme } from "styled-components";

interface InfoHistoryPainelProps {
  data: InfoUnityProps[];
  isLoading?: boolean;
}

const InfoHistoryPainel = ({ data, isLoading }: InfoHistoryPainelProps) => {
  const theme = useTheme();
  return (
    <InfoHistoryPainelContainer $hasContent={data.length !== 0}>
      <InfoHistoryPainelTitle>Histórico</InfoHistoryPainelTitle>
      <InfoHistoryPainelContent>
        {isLoading ? (
          <Loading color={theme.colors.primary["35"]} />
        ) : data?.length ? (
          data?.map((info) => <InfoUnity {...info} />)
        ) : (
          <NoContent
            icon={
              <FileDashed
                size={64}
                color={theme.colors.neutral["45"]}
              />
            }
            title="Ops! Esse chamado ainda não possui movimentações"
            fontSize="16px"
            color={theme.colors.neutral["45"]}
          />
        )}
      </InfoHistoryPainelContent>
    </InfoHistoryPainelContainer>
  );
};

export { InfoHistoryPainel };
