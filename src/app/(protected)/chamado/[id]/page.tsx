import { TicketPage, TicketPageProps } from "@/screens";

const Ticket = async ({ params }: { params: TicketPageProps }) => (
  <TicketPage id={params.id} />
);
export default Ticket;
