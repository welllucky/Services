"use client";

import { BackButton } from "@/components";
import { IssuePageContainer } from "./styles";
import { Row } from "@/styles";
import { useEffect } from "react";
import { resetForm } from "@/utils/functions";

export interface IssuePageProps {
  id: string;
}

const IssuePage = ({ id }: IssuePageProps) => {
  useEffect(() => {
    resetForm();
  }, []);
  return (
    <IssuePageContainer $full>
      <Row>
        <BackButton actionText="voltar" />
      </Row>
      <div>{id}</div>
    </IssuePageContainer>
  );
};

export { IssuePage };
