import { IssuePage, IssuePageProps } from "@/screens";
import { auth } from "@/auth";
import { appMonitoringServer } from "@/implementations/server";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";
import { redirect } from "next/navigation";

// eslint-disable-next-line consistent-return
const Issue = async ({ params }: { params: IssuePageProps }) => {
  try {
    const session = await auth();

    const response = await fetch(
      `${process.env.BASE_URL}/api/tickets/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      },
    );

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

export default Issue;
export const runtime = "nodejs";
