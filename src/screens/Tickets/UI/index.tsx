import { Header, Loading, NoContent } from "@/components";
import { TicketCard } from "@/components/TicketCard";
import { PageContainer } from "@/styles";
import { dataFormatter, ticketApi } from "@/utils";
import { DefaultTheme } from "styled-components";
import { MainContainer } from "../../Search/styles";

type TicketsPageUIProps = {
  theme: DefaultTheme;
};

export const TicketsPageUI = async ({ theme }: TicketsPageUIProps) => {
  const { data, isLoading } = ticketApi.getTickets();

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <Header
        userName="Colaborador"
        pageTittle="Solicitações"
      />
      <PageContainer>
        <MainContainer $hasContent={data.length !== 0}>
          {data?.length === 0 || !Array.isArray(data) ? (
            <NoContent
              alt="caixa vazia"
              title="Não há chamados no momento."
              color={theme.colors.neutral["5"]}
            />
          ) : (
            data.map((ticket) => (
              <TicketCard
                color="#9EDC72"
                $borderColor="#61A12F"
                key={ticket.id}
                id={ticket.id}
                nome={ticket.resume}
                date={dataFormatter(ticket.date ?? "")}
                $status={ticket.status}
                isUpdated
                href={`/solicitacao/${ticket.id}`}
              />
            ))
          )}
        </MainContainer>
      </PageContainer>
    </>
  );
};
