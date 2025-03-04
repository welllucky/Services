"use client";

import { TicketDto } from "@/types";
import { TicketProvider } from "@/utils";
import { buildTestIds, resetForm } from "@/utils/functions";
import { useFeatureFlags } from "@/utils/providers/FeatureFlagProvider";
import { useEffect } from "react";
import {
  FormDisplay,
  InfoHistoryPainel,
  // IssueActionButton,
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

const IssuePage = ({ data, id }: IssuePageProps) => {
  useEffect(() => {
    resetForm();
  }, []);

  const { getFlag } = useFeatureFlags();
  const isTicketEventsAvailable = getFlag("isTicketEventsAvailable");

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

export default IssuePage;
