import { TicketPage } from "@/screens";

const Ticket = ({
  params,
}: {
  params: {
    id: string;
  };
}) => (
  // const response = await fetch(`${ticketUrl}${params.id}`, {
  //   next: {
  //     revalidate: 60 * 3,
  //     tags: ["ticket"],
  //   },
  // });

  // const { data, error } = (await response.json()) as IHttpResponse<
  //   TicketDto,
  //   string
  // >;

  // console.log({ error });

  // if (error) {
  //   return <div>{error}</div>;
  // }

  <TicketPage id={params.id} />
);
export default Ticket;
