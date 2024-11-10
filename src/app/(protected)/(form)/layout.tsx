import { NoMobileDevicePage } from "@/screens";
import { OpenIssueTemplateUI } from "@/screens/OpenIssue/Template";
import { ICreateIssueFlowPage } from "@/screens/OpenIssue/Template/data";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { auth } from "@/utils/functions/AuthUser";
import { cookies } from "next/headers";
import { ReactNode } from "react";

const Template = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get(CS_KEY_ACCESS_TOKEN)?.value || "";
  const session = await auth(accessToken);

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

  if (!session?.user.canCreateTicket) {
    return <NoMobileDevicePage />;
  }

  return <OpenIssueTemplateUI pages={pages}>{children}</OpenIssueTemplateUI>;
};

export default Template;
