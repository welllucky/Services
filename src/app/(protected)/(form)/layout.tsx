import { OpenIssueTemplateUI } from "@/screens/OpenIssue/Template";
import { ICreateIssueFlowPage } from "@/screens/OpenIssue/Template/data";
// import { auth } from "@/utils/functions/AuthUser";
import { ReactNode } from "react";

const Template = async ({ children }: Readonly<{ children: ReactNode }>) => {
  // const session = await auth();

  const pages = [
    {
      page: "/abrir-chamado",
      title: "O que aconteceu?",
      hasBackButton: false,
    },
    // {
    //   page: "/anexar-midia",
    //   title: "Anexar mídia",
    //   hasBackButton: true
    // },
    {
      page: "/confirmar-chamado",
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
