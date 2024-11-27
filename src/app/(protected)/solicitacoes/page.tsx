import { TicketsPage } from "@/screens";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitações",
};

const Tickets = async () => (
  // const cookiesStore = cookies();
  // const accessToken = cookiesStore.get(CS_KEY_ACCESS_TOKEN)?.value || "";
  // const session = await auth(accessToken);
  // if (!session?.user.canResolveTicket) {
  //   return <NoMobileDevicePage />;
  // }

  <TicketsPage />
);
export default Tickets;
