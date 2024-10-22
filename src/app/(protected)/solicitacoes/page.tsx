import { auth } from "@/auth";
import { NoMobileDevicePage, TicketsPage } from "@/screens";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitações",
};

const Tickets = async () => {
  const session = await auth();
  if (!session?.user.canResolveTicket) {
    return <NoMobileDevicePage />;
  }

  return <TicketsPage />;
};

export default Tickets;
