import { Loading, NoContent, SubHeader } from "@/components";
import { AddNewIssueButton } from "@/components/common/Buttons";
import { TicketCard } from "@/components/TicketCard";
import { MainContainer } from "@/screens/Search/UI/components/content/styles";
import { PageContainer } from "@/styles";
import { TicketDto } from "@/types";
import { SS_KEY_USER_PREVIOUS_PAGE, dataFormatter } from "@/utils";
import { useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useMemo } from "react";
import { DefaultTheme } from "styled-components";
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

  const { data: session } = useSession();

  const user = useMemo(() => session?.user, [session?.user]);

  const { push } = router;
  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <SubHeader title="Home" />
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
                name={issue?.description}
                date={dataFormatter(issue.date)}
                $status={issue.status}
                isUpdated={false}
                href={`/chamado/${issue.id}`}
              />
            ))
          )}
        </MainContainer>
        <ButtonWrapper>
          {user?.canCreateTicket && dataLength < 5 ? (
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
