import {
  AddNewIssueButton,
  NoContent,
  Skeleton,
  SkeletonContainer,
  SubHeader,
  TicketCard,
} from "@/components";
import { MainContainer } from "@/screens/Search/UI/components/content/styles";
import { PageContainer } from "@/styles";
import { IUser, TicketDto } from "@/types";
import { SS_KEY_USER_PREVIOUS_PAGE } from "@/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useCallback, useMemo } from "react";
import { ButtonWrapper } from "../styles";

type HomePageUIProps = {
  data?: TicketDto[] | null;
  isLoading?: boolean;
  router: AppRouterInstance;
  user?: IUser | null;
};

const INITIAL_ISSUE_QUANTITY_LIMIT = 5;

const IssuePageSkeleton = () => {
  return (
    <SkeletonContainer gap="40px">
      {Array.from({ length: INITIAL_ISSUE_QUANTITY_LIMIT }).map(
        (_, index) => (
          <Skeleton
            type="card"
            // eslint-disable-next-line react/no-array-index-key
            key={`skeleton-card-${index}`}
          />
        ),
      )}
    </SkeletonContainer>
  );
};

export const HomePageUI = ({
  data,
  isLoading,
  router,
  user,
}: HomePageUIProps) => {
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
      <PageContainer>
        <MainContainer $centerContent={showFallback}>
          {isLoading && <IssuePageSkeleton />}

          {showFallback && (
            <NoContent
              alt="caixa vazia"
              title="Não há chamados no momento."
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
