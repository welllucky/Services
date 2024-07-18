import { ticketUrl } from "@/app/api/url";
import { ITicket } from "@/assets";
import { TicketPage } from "@/screens";

export const revalidate = 10;

const Ticket = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const response = await fetch(`${ticketUrl}${params.id}`, {
    next: {
      revalidate: 60 * 1,
      tags: ["ticket"],
    },
  });

  const data = (await response.json()) as ITicket;

  return <TicketPage data={data} />;
};

export default Ticket;
