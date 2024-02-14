"use client";

import { BackButton } from "@/components";
import { IssuePageContainer } from "./styles";
import { Row } from "@/styles";
import { useEffect } from "react";
import { resetForm } from "@/utils/functions";
import { useRouter } from "next/navigation";

export interface IssuePageProps {
  id: string;
}

const IssuePage = ({ id }: IssuePageProps) => {
  useEffect(() => {
    resetForm();
  }, []);

  const router = useRouter();

  return (
    <IssuePageContainer $full>
      <Row>
        <BackButton onClick={() => router.push("/")} actionText="chamados" />
      </Row>
      <div>{id}</div>
    </IssuePageContainer>
  );
};

export { IssuePage };
