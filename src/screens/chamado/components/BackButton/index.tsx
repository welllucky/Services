import { BackButton } from "@/components";
import { Row } from "@/styles";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type TicketPageBackButtonProps = {
  router: AppRouterInstance;
};

export const TicketPageBackButton = ({ router }: TicketPageBackButtonProps) => {
  return (
    <Row>
      <BackButton
        onClick={() => router.push("/")}
        actionText="chamados"
      />
    </Row>
  );
};
