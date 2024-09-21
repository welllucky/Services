"use client";

import { Loading } from "@/components";

import { ticketApi, TicketProvider } from "@/utils";
import { buildTestIds, resetForm } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  FormDisplay,
  InfoHistoryPainel,
  IssueActionButton,
  TicketPageBackButton,
  TicketPageTitle,
} from "./components";
import {
  TicketPageContainer,
  TicketPageContent,
  TicketPageWrapper,
} from "./styles";

export interface TicketPageProps {
  // data?: TicketDto;
  id: string;
}

const TicketPage = ({ id }: TicketPageProps) => {
  const { data, isLoading } = ticketApi.getTicket(id);

  const router = useRouter();

  useEffect(() => {
    resetForm();
  }, []);

  if (isLoading) {
    return <Loading overlayOn />;
  }

  return (
    <TicketProvider data={data}>
      <TicketPageContainer $full>
        <TicketPageBackButton router={router} />
        <TicketPageWrapper>
          <TicketPageTitle text={`Chamado n° ${data?.id}`} />
          <TicketPageContent
            {...buildTestIds("content-column")}
            height="100%">
            <FormDisplay data={data} />
            <InfoHistoryPainel
              data={data?.historic}
              isLoading={isLoading}
            />
          </TicketPageContent>
        </TicketPageWrapper>
        <IssueActionButton />
      </TicketPageContainer>
    </TicketProvider>
  );
};

export { TicketPage };
