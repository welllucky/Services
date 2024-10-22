import { auth } from "@/auth";
import { NoMobileDevicePage } from "@/screens";
import { OpenTicketTemplateUI } from "@/screens/OpenTicket/Template";
import { ICreateTicketFlowPage } from "@/screens/OpenTicket/Template/data";
import { ReactNode } from "react";

const Template = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const session = await auth();
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
  ] as ICreateTicketFlowPage[];

  if (!session?.user.canCreateTicket) {
    return <NoMobileDevicePage />;
  }

  return <OpenTicketTemplateUI pages={pages}>{children}</OpenTicketTemplateUI>;
};

export default Template;
