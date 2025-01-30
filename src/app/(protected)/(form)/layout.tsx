import { OpenIssueTemplateUI } from "@/screens/OpenIssue/Template";
import { ICreateIssueFlowPage } from "@/screens/OpenIssue/Template/data";
// import { auth } from "@/utils/functions/AuthUser";
import { ReactNode } from "react";

const Template = async ({ children }: Readonly<{ children: ReactNode }>) => {
  // const session = await auth();

  const pages = [
    {
      page: "/open-ticket",
      title: "O que aconteceu?",
      hasBackButton: false,
    },
    // {
    //   page: "/add-media",
    //   title: "Anexar mídia",
    //   hasBackButton: true
    // },
    {
      page: "/confirm-ticket",
      title: "Confirmar informações",
      hasBackButton: true,
    },
  ] as ICreateIssueFlowPage[];

  // if (!session?.user.canCreateTicket) {
  //   return <NoMobileDevicePage />;
  // }

  return <OpenIssueTemplateUI pages={pages}>{children}</OpenIssueTemplateUI>;
};

export default Template;
