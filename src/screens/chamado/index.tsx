"use client";

import { Loading } from "@/components";

import { ITicket } from "@/types";
import { TicketProvider } from "@/utils";
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
import { TicketPageContainer, TicketPageContent } from "./styles";

export interface TicketPageProps {
  data: ITicket;
}

const TicketPage = ({ data }: TicketPageProps) => {
  useEffect(() => {
    resetForm();
  }, []);

  const router = useRouter();

  if (!data) {
    return <Loading overlayOn />;
  }

  return (
    <TicketProvider data={data}>
      <TicketPageContainer $full>
        <TicketPageBackButton router={router} />
        <TicketPageTitle text={`Chamado n° ${data?.id}`} />
        <TicketPageContent
          {...buildTestIds("content-column")}
          height="100%">
          <FormDisplay data={data} />
          <InfoHistoryPainel
            data={data?.historic}
            isLoading={!data}
          />
        </TicketPageContent>
        <IssueActionButton />
      </TicketPageContainer>
    </TicketProvider>
  );
};

export { TicketPage };
