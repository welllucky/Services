"use client";

import { Loading } from "@/components";
import { ticketApi, TicketProvider } from "@/utils";
import { buildTestIds } from "@/utils/functions";
import { useRouter } from "next/navigation";
import {
  FormDisplay,
  InfoHistoryPainel,
  IssueActionButton,
  IssuePageBackButton,
  IssuePageTitle,
} from "./components";
import {
  IssuePageContainer,
  IssuePageContent,
  IssuePageWrapper,
} from "./styles";

export interface IssuePageProps {
  // data?: TicketDto;
  id: string;
}

const IssuePage = ({ id }: IssuePageProps) => {
  const { data, isLoading } = ticketApi.getTicket(id);

  const router = useRouter();

  if (isLoading) {
    return <Loading overlayOn />;
  }

  return (
    <TicketProvider data={data}>
      <IssuePageContainer $full>
        <IssuePageBackButton router={router} />
        <IssuePageWrapper>
          <IssuePageTitle text={`Solicitação n° ${data?.id}`} />
          <IssuePageContent
            {...buildTestIds("content-column")}
            height="100%">
            <FormDisplay data={data} />
            <InfoHistoryPainel
              data={data?.historic}
              isLoading={isLoading}
            />
          </IssuePageContent>
        </IssuePageWrapper>
        <IssueActionButton />
      </IssuePageContainer>
    </TicketProvider>
  );
};

export { IssuePage };
