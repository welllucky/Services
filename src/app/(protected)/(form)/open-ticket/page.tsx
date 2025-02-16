import { Metadata } from "next";
import { CreateTicketPage } from "@/screens";

export const metadata: Metadata = {
  title: { default: "Abrir chamado", template: "%s | Services" },
};

const OpenTicket = () => <CreateTicketPage />;

export default OpenTicket;
