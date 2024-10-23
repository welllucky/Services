"use client";

import { Loading } from "@/components";

import { issueApi, IssueProvider } from "@/utils";
import { buildTestIds, resetForm } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
  // data?: IssueDto;
  id: string;
}

const IssuePage = ({ id }: IssuePageProps) => {
  const { data, isLoading } = issueApi.getIssue(id);

  const router = useRouter();

  useEffect(() => {
    resetForm();
  }, []);

  if (isLoading) {
    return <Loading $overlayOn />;
  }

  return (
    <IssueProvider data={data}>
      <IssuePageContainer $full>
        <IssuePageBackButton router={router} />
        <IssuePageWrapper>
          <IssuePageTitle text={`Chamado n° ${data?.id}`} />
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
    </IssueProvider>
  );
};

export { IssuePage };
