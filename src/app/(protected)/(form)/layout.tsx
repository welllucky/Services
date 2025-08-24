import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { auth } from "@/auth";
import { OpenIssueTemplateUI } from "@/screens/OpenTicket/Template";
import { ICreateIssueFlowPage } from "@/screens/OpenTicket/Template/data";

const Template = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const session = await auth();

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

  if (!session?.user.canCreateTicket) {
    redirect("/");
  }

  return <OpenIssueTemplateUI pages={pages}>{children}</OpenIssueTemplateUI>;
};

export default Template;

export const runtime = "nodejs";
