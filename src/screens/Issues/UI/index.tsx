import {
  AddNewIssueButton,
  Header,
  Loading,
  NoContent,
  TicketCard,
} from "@/components";
import { MainContainer } from "@/screens/Search/UI/components/content/styles";
import { PageContainer } from "@/styles";
import { TicketDto } from "@/types";
import { dataFormatter, SS_KEY_USER_PREVIOUS_PAGE } from "@/utils";
import { useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useMemo } from "react";
import { ButtonWrapper } from "../styles";

type IssuesPageUIProps = {
  data: TicketDto[] | undefined;
  isLoading: boolean;
  router: AppRouterInstance;
};

export const IssuesPageUI = ({
  data,
  isLoading,
  router,
}: IssuesPageUIProps) => {
  const dataLength = data?.length ?? 0;

  const { data: session } = useSession();

  const user = useMemo(() => session?.user, [session?.user]);

  const { push } = router;
  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <>
      <Header
        userName={user?.name ?? ""}
        pageTittle="Meus chamados"
        issueQuantify={dataLength}
        canCreateTicket={user?.canCreateTicket}
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
