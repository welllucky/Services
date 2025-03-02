import { auth } from "@/auth";
import { appMonitoringServer } from "@/implementations/server";
import { Homepage as Home } from "@/screens";
import { IHttpError, IHttpResponse, TicketDto } from "@/types";
import { issueApi } from "@/utils";
import { redirect } from "next/navigation";

// eslint-disable-next-line consistent-return
const Homepage = async () => {
  try {
    const session = await auth();

    if (!session) {
      redirect("/login");
    }

    const res = await fetch(issueApi.getIssuesEndpoint(), {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });

    const { data } = (await res.json()) as IHttpResponse<
      TicketDto[],
      IHttpError
    >;

    return (
      <Home
        data={data}
        user={{ ...session.user, accessToken: session?.accessToken ?? "" }}
      />
    );
  } catch (error) {
    appMonitoringServer.captureException(error);
    redirect("/");
  }
};

export default Homepage;
export const runtime = "nodejs";
