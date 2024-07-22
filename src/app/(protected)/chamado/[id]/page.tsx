import { ticketUrl } from "@/app/api/url";
import { IHttpResponse, TicketDto } from "@/assets";
import { TicketPage } from "@/screens";

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

  const { data, error } = (await response.json()) as IHttpResponse<
    TicketDto,
    string
  >;

  console.log({ data, error });

  if (error) {
    return <div>{error}</div>;
  }

  return <TicketPage data={data} />;
};

export default Ticket;
