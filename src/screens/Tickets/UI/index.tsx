import { DefaultTheme } from "styled-components";

import { Loading, NoContent, SubHeader } from "@/components";
import { TicketCard } from "@/components/TicketCard";
import { MainContainer } from "@/screens/Search/UI/components/content/styles";
import { PageContainer } from "@/styles";
import { TicketDto } from "@/types";

export type TicketsPageUIProps = {
  data?: TicketDto[];
  isLoading?: boolean;
  theme?: DefaultTheme;
};

const TicketsPageUI = ({
  theme,
  data,
  isLoading = false,
}: TicketsPageUIProps) => {
  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <SubHeader title="Solicitações" />
      <PageContainer
        $start={!(data?.length === 0 || !Array.isArray(data))}>
        <MainContainer>
          {data?.length === 0 || !Array.isArray(data) ? (
            <NoContent
              alt="caixa vazia"
              title="Não há chamados no momento."
              color={theme?.colors.neutral["5"]}
            />
          ) : (
            data.map((ticket) => (
              <TicketCard
                color="#9EDC72"
                $borderColor="#61A12F"
                key={ticket.id}
                id={ticket.id}
                name={ticket.resume}
                date={ticket.date}
                $status={ticket.status}
                isUpdated
                href={`/issue/${ticket.id}`}
              />
            ))
          )}
        </MainContainer>
      </PageContainer>
    </>
  );
};

export default TicketsPageUI;
