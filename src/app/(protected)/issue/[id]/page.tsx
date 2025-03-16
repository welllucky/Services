import { auth } from "@/auth";
import { DEFAULT_CACHE_TIME } from "@/constraints";
import { appMonitoringServer, http } from "@/implementations/server";
import { TicketPage } from "@/screens";
import { IssuePageProps } from "@/screens/Ticket";
import { TicketDto } from "@/types";
import { ticketApi } from "@/utils";
import { notFound, redirect } from "next/navigation";

// eslint-disable-next-line consistent-return
const Issue = async ({ params }: { params: IssuePageProps }) => {
  try {
    const session = await auth();

    const { data, status } = await http.get<TicketDto>({
      url: ticketApi.getTicketEndpoint(params.id, true),
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      options: {
        revalidate: DEFAULT_CACHE_TIME,
        tags: ["issue"],
      },
    });

    if (status === 404 || !data) {
      notFound();
    }

    return (
      <TicketPage
        data={data}
        id={params.id}
      />
    );
  } catch (error) {
    appMonitoringServer.captureException(error);
    redirect("/");
  }
};

export default Issue;
export const runtime = "nodejs";
