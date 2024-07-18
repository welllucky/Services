import { InfoUnityProps } from "@/types";
import { useTicket } from "@/utils";
import { FileDashed } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Loading, NoContent } from "../../../../components";
import { InfoUnity } from "./InfoUnity";
import {
  InfoHistoryPainelContainer,
  InfoHistoryPainelContent,
  InfoHistoryPainelTitle,
} from "./styles";

interface InfoHistoryPainelProps {
  data?: InfoUnityProps[];
  isLoading?: boolean;
}

/**
 * Renders the information history panel with data and loading state.
 * @param {InfoHistoryPainelProps} props - The properties for the InfoHistoryPainel component.
 * @param {Object} props.data - The data to display in the panel.
 * @param {boolean} props.isLoading - Indicates if the data is currently loading.
 */
const InfoHistoryPainel = ({ data, isLoading }: InfoHistoryPainelProps) => {
  const theme = useTheme();

  const { historic } = useTicket();

  if (isLoading) {
    return <Loading color={theme.colors.primary["35"]} />;
  }

  const events = historic || data;

  if (!events) {
    return (
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
    );
  }

  return (
    <InfoHistoryPainelContainer $hasContent={events.length !== 0}>
      <InfoHistoryPainelTitle>Histórico</InfoHistoryPainelTitle>
      <InfoHistoryPainelContent>
        {events.map((info) => (
          <InfoUnity {...info} />
        ))}
      </InfoHistoryPainelContent>
    </InfoHistoryPainelContainer>
  );
};

export { InfoHistoryPainel };
