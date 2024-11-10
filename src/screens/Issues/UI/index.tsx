import {
  AddNewIssueButton,
  Loading,
  NoContent,
  SubHeader,
  TicketCard,
} from "@/components";
import { MainContainer } from "@/screens/Search/UI/components/content/styles";
import { PageContainer } from "@/styles";
import { TicketDto } from "@/types";
import { dataFormatter, SS_KEY_USER_PREVIOUS_PAGE, useAuth } from "@/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useCallback, useMemo } from "react";
import { ButtonWrapper } from "../styles";

type IssuesPageUIProps = {
  data: TicketDto[] | undefined;
  isLoading: boolean;
  router: AppRouterInstance;
};

const INITIAL_ISSUE_QUANTITY_LIMIT = 5;

export const IssuesPageUI = ({
  data,
  isLoading,
  router,
}: IssuesPageUIProps) => {
  const issuesQuantity = data?.length ?? 0;

  const { user } = useAuth();

  const showAddIssueButton = useMemo(
    () =>
      user?.canCreateTicket && issuesQuantity > INITIAL_ISSUE_QUANTITY_LIMIT,
    [issuesQuantity, user?.canCreateTicket],
  );

  const addIssueCallback = useCallback(() => {
    sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "home");
    router.push("/abrir-chamado");
  }, [router]);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <SubHeader
        title="Meus chamados"
        showAddIssueButton={showAddIssueButton}
        addButtonCallback={addIssueCallback}
      />
      <PageContainer>
        <MainContainer $hasContent={Boolean(issuesQuantity !== 0)}>
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
                name={issue?.resume}
                date={dataFormatter(issue.date)}
                $status={issue.status}
                isUpdated={false}
                href={`/chamado/${issue.id}`}
              />
            ))
          )}
        </MainContainer>
        <ButtonWrapper>
          {user?.canCreateTicket &&
            issuesQuantity < INITIAL_ISSUE_QUANTITY_LIMIT && (
              <AddNewIssueButton
                $styles={{ hasShadow: true }}
                onClick={addIssueCallback}
              />
            )}
        </ButtonWrapper>
      </PageContainer>
    </>
  );
};
