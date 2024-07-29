import { Header, Loading, NoContent } from "@/components";
import { AddNewIssueButton } from "@/components/common/Buttons";
import { TicketCard } from "@/components/TicketCard";
import { PageContainer } from "@/styles";
import { TicketDto } from "@/types";
import { SS_KEY_USER_PREVIOUS_PAGE, dataFormatter } from "@/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { DefaultTheme } from "styled-components";
import { MainContainer } from "../../Search/styles";
import { ButtonWrapper } from "../styles";

type HomePageUIProps = {
  data?: TicketDto[];
  isLoading: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  theme?: DefaultTheme;
  router: AppRouterInstance;
};

export const HomePageUI = ({ data, isLoading, router }: HomePageUIProps) => {
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
              $styles={{ hasShadow: true }}
              onClick={() => {
                sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "home");
                push("/abrir-chamado");
              }}
            />
          ) : null}
        </ButtonWrapper>
      </PageContainer>
    </>
  );
};
