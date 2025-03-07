import { auth } from "@/auth";
import { Homepage as Home } from "@/screens";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";
import { issueApi } from "@/utils";
import { redirect } from "next/navigation";

// eslint-disable-next-line consistent-return
const Homepage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const res = await fetch(issueApi.getInProgressIssuesEndpoint(), {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
    next: {
      // revalidate: DEFAULT_CACHE_TIME,
      tags: ["tickets"],
    },
  });

  const { data } = (await res.json()) as IHttpResponse<TicketDto[], IHttpError>;

  return (
    <Home
      data={data}
      user={{ ...session.user, accessToken: session?.accessToken ?? "" }}
    />
  );
};

export default Homepage;
export const runtime = "nodejs";
