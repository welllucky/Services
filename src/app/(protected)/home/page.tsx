import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { http } from "@/implementations/server";
import { Homepage as Home } from "@/screens";
import { TicketDto } from "@/types";
import { ticketApi } from "@/utils";

// eslint-disable-next-line consistent-return
const Homepage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const res = await http.get<TicketDto[]>({
    url: ticketApi.getInProgressTicketsEndpoint(),
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
    options: {
      tags: ["ticket"],
    },
  });

  return (
    <Home
      data={res.data}
      user={{ ...session.user, accessToken: session?.accessToken ?? "" }}
    />
  );
};

export default Homepage;
export const runtime = "nodejs";
