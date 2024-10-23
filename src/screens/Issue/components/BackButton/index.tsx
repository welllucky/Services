import { BackButton } from "@/components";
import { Row } from "@/styles";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type IssuePageBackButtonProps = {
  router: AppRouterInstance;
};

export const IssuePageBackButton = ({ router }: IssuePageBackButtonProps) => (
  <Row>
    <BackButton
      onClick={() => router.back()}
      actionText="chamados"
      />
  </Row>
  );
