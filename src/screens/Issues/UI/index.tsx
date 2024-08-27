import { Header, Loading, NoContent } from "@/components";
import { TicketCard } from "@/components/TicketCard";
import { PageContainer } from "@/styles";
import { dataFormatter, issueApi } from "@/utils";
import { DefaultTheme } from "styled-components";
import { MainContainer } from "../../Search/styles";

type IssuesPageUIProps = {
  theme: DefaultTheme;
};

export const IssuesPageUI = async ({ theme }: IssuesPageUIProps) => {
  const { data, isLoading } = issueApi.getIssues();

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <Header
        userName="Colaborador"
        pageTittle="Chamados solicitados"
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
            data.map((issue) => (
              <TicketCard
                color="#9EDC72"
                $borderColor="#61A12F"
                key={issue.id}
                id={issue.id}
                nome={issue.resume}
                date={dataFormatter(issue.date ?? "")}
                $status={issue.status}
                isUpdated
              />
            ))
          )}
        </MainContainer>
      </PageContainer>
    </>
  );
};
