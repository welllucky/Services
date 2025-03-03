import { auth } from "@/auth";
import { DEFAULT_CACHE_TIME } from "@/constraints";
import { appMonitoringServer } from "@/implementations/server";
import { IssuePage, IssuePageProps } from "@/screens";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";
import { issueApi } from "@/utils";
import { redirect } from "next/navigation";

// eslint-disable-next-line consistent-return
const Ticket = async ({ params }: { params: IssuePageProps }) => {
  try {
    const session = await auth();

    const response = await fetch(issueApi.getIssueEndpoint(params.id), {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      next: {
        revalidate: DEFAULT_CACHE_TIME,
        tags: ["ticket"],
      },
    });

    const { data } = (await response.json()) as IHttpResponse<
      TicketDto,
      IHttpError
    >;

    return (
      <IssuePage
        data={data}
        id={params.id}
      />
    );
  } catch (error) {
    appMonitoringServer.captureException(error);
    redirect("/");
  }
};
export default Ticket;

export const runtime = "nodejs";
