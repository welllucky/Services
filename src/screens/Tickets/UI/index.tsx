import {
  AddNewIssueButton,
  Header,
  Loading,
  NoContent,
  TicketCard,
} from "@/components";
import { MainContainer } from "@/screens/Search/styles";
import { PageContainer } from "@/styles";
import { TicketDto } from "@/types";
import { dataFormatter } from "@/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { DefaultTheme } from "styled-components";
import { ButtonWrapper } from "../styles";

type TicketsPageUIProps = {
  data?: TicketDto[];
  isLoading: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  theme?: DefaultTheme;
  router: AppRouterInstance;
};

export const TicketsPageUI = ({
  data,
  isLoading,
  router,
}: TicketsPageUIProps) => {
  const dataLength = data?.length ?? 0;
  const { push } = router;

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <Header
        userName="Colaborador"
        pageTittle="Meus chamados"
        issueQuantify={dataLength}
      />
      <PageContainer>
        <MainContainer $hasContent={dataLength !== 0}>
          {data?.length === 0 || !Array.isArray(data) ? (
            <NoContent
              alt="caixa vazia"
              title="Não há chamados no momento."
            />
          ) : (
            data?.map((issue) => (
              <TicketCard
                key={issue?.id}
                id={String(issue?.id)}
                nome={issue?.description}
                date={dataFormatter(issue.date)}
                $status={issue.status}
                isUpdated={false}
              />
            ))
          )}
        </MainContainer>
        <ButtonWrapper>
          {dataLength < 5 ? (
            <AddNewIssueButton
              onClick={() => push("/abrir-chamado")}
              $styles={{ hasShadow: true }}
            />
          ) : null}
        </ButtonWrapper>
      </PageContainer>
    </>
  );
};
