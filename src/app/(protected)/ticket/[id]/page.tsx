import { auth } from "@/auth";
import { DEFAULT_CACHE_TIME } from "@/constraints";
import { IssuePage } from "@/screens";
import { IssuePageProps } from "@/screens/Issue";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";
import { ticketApi } from "@/utils";
import { notFound } from "next/navigation";

// eslint-disable-next-line consistent-return
const Ticket = async ({ params }: { params: IssuePageProps }) => {
  const session = await auth();

  const response = await fetch(ticketApi.getTicketEndpoint(params.id), {
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

  if (response.status === 404 || !data) {
    notFound();
  }

  return (
    <IssuePage
      data={data}
      id={params.id}
    />
  );
};
export default Ticket;

export const runtime = "nodejs";
