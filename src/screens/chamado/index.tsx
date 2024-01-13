"use client";

import {
  BackButton,
  CustomSelect,
  CustomTextArea,
  OutlinedInput
} from "@/components";
import { IssuePageContainer } from "./styles";
import { Row } from "@/styles";

const IssuePage = () => {
  return (
    <IssuePageContainer $full>
      <Row>
        <BackButton actionText="voltar" />
      </Row>
    </IssuePageContainer>
  );
};

export { IssuePage };
