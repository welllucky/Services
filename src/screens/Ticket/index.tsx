"use client";

import { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { TicketDto } from "@/types";
// eslint-disable-next-line import/no-unresolved
import { buildTestIds, resetForm, TicketProvider, useFlags } from "@/utils";

import {
  FormDisplay,
  InfoHistoryPainel,
  IssuePageBackButton,
  IssuePageTitle,
} from "./components";
import {
  IssuePageContainer,
  IssuePageContent,
  IssuePageWrapper,
} from "./styles";

export interface IssuePageProps {
  data?: TicketDto;
  id: string;
}

const TicketPage = ({ data, id }: IssuePageProps) => {
  const { getFlag } = useFlags();
  const isTicketEventsAvailable = getFlag("isTicketEventsAvailable") as boolean;

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <TicketProvider data={data}>
      <IssuePageContainer $full>
        <IssuePageBackButton />
        <IssuePageWrapper>
          <IssuePageTitle text={`Chamado n° ${id}`} />
          <IssuePageContent
            {...buildTestIds("content-column")}
            height="100%">
            <FormDisplay data={data} />
            {isTicketEventsAvailable && <InfoHistoryPainel />}
          </IssuePageContent>
        </IssuePageWrapper>
        {/* <IssueActionButton /> */}
      </IssuePageContainer>
    </TicketProvider>
  );
};

export default TicketPage;
