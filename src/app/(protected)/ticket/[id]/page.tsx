import { auth } from "@/auth";
import { appMonitoringServer } from "@/implementations/server";
import { IssuePage, IssuePageProps } from "@/screens";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";

const Ticket = async ({ params }: { params: IssuePageProps }) => {
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
    return <h1>Erro ao carregar a página</h1>;
  }
};
export default Ticket;

export const runtime = "nodejs";
