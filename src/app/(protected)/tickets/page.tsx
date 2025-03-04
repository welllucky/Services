import { auth } from "@/auth";
import { DEFAULT_CACHE_TIME } from "@/constraints";
import { appMonitoringServer } from "@/implementations/server";
import { IssuesPage } from "@/screens";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";
import { issueApi } from "@/utils";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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

    const res = await fetch(issueApi.getIssuesEndpoint(), {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      next: {
        revalidate: DEFAULT_CACHE_TIME,
        tags: ["tickets"],
      },
    });

    const { data } = (await res.json()) as IHttpResponse<
      TicketDto[],
      IHttpError
    >;

    return <IssuesPage data={data} />;
  } catch (error) {
    appMonitoringServer.captureException(error);
    redirect("/");
  }
};
export default MyTickets;
