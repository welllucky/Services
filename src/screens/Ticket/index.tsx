"use client";

import { Loading } from "@/components";
import { TicketDto } from "@/types";
import { ticketApi, TicketProvider } from "@/utils";
import { buildTestIds } from "@/utils/functions";
import { useRouter } from "next/navigation";
import {
  FormDisplay,
  InfoHistoryPainel,
  TicketActionButton,
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

  if (isLoading) {
    return <Loading $overlayOn />;
  }

  return (
    <TicketProvider>
      <TicketPageContainer $full>
        <TicketPageBackButton router={router} />
        <TicketPageWrapper>
          <TicketPageTitle text={`Solicitação n° ${data?.id}`} />
          <TicketPageContent
            {...buildTestIds("content-column")}
            height="100%">
            <FormDisplay data={data as TicketDto} />
            <InfoHistoryPainel isLoading={isLoading} />
          </TicketPageContent>
        </TicketPageWrapper>
        <TicketActionButton />
      </TicketPageContainer>
    </TicketProvider>
  );
};

export { TicketPage };
