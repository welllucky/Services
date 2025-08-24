import { Metadata } from "next";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { DEFAULT_CACHE_TIME } from "@/constraints";
import { appMonitoringServer, http } from "@/implementations/server";
import { IssuesPage } from "@/screens";
import { TicketDto } from "@/types";
import { ticketApi } from "@/utils";

export const metadata: Metadata = {
  title: "Meus chamados",
};

// eslint-disable-next-line consistent-return
const MyTickets = async () => {
  try {
    const session = await auth();

    if (!session?.accessToken) {
      redirect("/login");
    }

    const { data } = await http.get<TicketDto[]>({
      url: ticketApi.getTicketsEndpoint(),
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      options: {
        revalidate: DEFAULT_CACHE_TIME,
        tags: ["tickets"],
      },
    });

    return <IssuesPage data={data} />;
  } catch (error) {
    appMonitoringServer.captureException(error);
    redirect("/");
  }
};
export default MyTickets;
export const dynamic = "force-dynamic";
