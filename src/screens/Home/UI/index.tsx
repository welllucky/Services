"use client";

import {
  AddNewIssueButton,
  NoContent,
  Skeleton,
  SubHeader,
  TicketCard,
} from "@/components";
import { SS_KEY_USER_PREVIOUS_PAGE } from "@/constraints";
import { MainContainer } from "@/screens/Search/UI/components/content/styles";
import { PageContainer } from "@/styles";
import { IUser, TicketDto } from "@/types";
import { buildTestIds } from "@/utils";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { ButtonWrapper } from "../styles";

type HomePageUIProps = {
  data?: TicketDto[] | null;
  isLoading?: boolean;
  user?: IUser | null;
};

const INITIAL_ISSUE_QUANTITY_LIMIT = 5;

const HomePageUI = ({ data, isLoading, user }: HomePageUIProps) => {
  const router = useRouter();
  const issuesQuantity = useMemo(() => data?.length ?? 0, [data]);

  const showAddIssueButton = useMemo(
    () =>
      user?.canCreateTicket && issuesQuantity > INITIAL_ISSUE_QUANTITY_LIMIT,
    [issuesQuantity, user?.canCreateTicket],
  );

  const addIssueCallback = useCallback(() => {
    sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "home");
    router.push("/open-ticket");
  }, [router]);

  const hasContent = useMemo(
    () => Boolean(issuesQuantity !== 0) && !isLoading,
    [issuesQuantity, isLoading],
  );

  const showFallback = useMemo(
    () => !hasContent && !isLoading && !Array.isArray(data),
    [data, hasContent, isLoading],
  );

  const showCreateTicketButton = useMemo(
    () =>
      Boolean(
        user?.canCreateTicket && issuesQuantity < INITIAL_ISSUE_QUANTITY_LIMIT,
      ) && !isLoading,
    [user?.canCreateTicket, issuesQuantity, isLoading],
  );

  return (
    <>
      <SubHeader
        title="Meus chamados"
        showAddIssueButton={showAddIssueButton}
        addButtonCallback={addIssueCallback}
      />
      <PageContainer $start={!(showFallback || !hasContent)}>
        <MainContainer
          {...buildTestIds("home-page-content")}
          $centerContent={showFallback}>
          {isLoading && (
            <Skeleton
              {...buildTestIds("home-page-skeleton")}
              type="page"
              quantity={INITIAL_ISSUE_QUANTITY_LIMIT}
            />
          )}

          {showFallback && (
            <NoContent
              alt="caixa vazia"
              title="Não há chamados em andamento no momento."
            />
          )}

          {hasContent && (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {data?.map((issue) => (
                <TicketCard
                  key={issue?.id}
                  id={String(issue?.id)}
                  name={issue?.resume}
                  date={issue.date}
                  $status={issue.status}
                  isUpdated={false}
                  href={`/ticket/${issue.id}`}
                />
              ))}
            </>
          )}
        </MainContainer>
        <ButtonWrapper>
          {showCreateTicketButton && (
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

export default HomePageUI;
