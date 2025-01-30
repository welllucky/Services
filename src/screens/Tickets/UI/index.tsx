import { Loading, NoContent, SubHeader } from "@/components";
import { TicketCard } from "@/components/TicketCard";
import { MainContainer } from "@/screens/Search/UI/components/content/styles";
import { PageContainer } from "@/styles";
import { TicketDto } from "@/types";
import { dataFormatter } from "@/utils/functions/dataFormatter";
import { DefaultTheme } from "styled-components";

export type TicketsPageUIProps = {
  data?: TicketDto[];
  isLoading?: boolean;
  theme?: DefaultTheme;
};

export const TicketsPageUI = async ({
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
      <PageContainer>
        <MainContainer $hasContent={Number(data?.length) !== 0}>
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
                date={dataFormatter(ticket.date ?? "")}
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
