import { Metadata } from "next";
import { OpenTicketPage } from "@/screens";

export const metadata: Metadata = {
  title: { default: "Abrir chamado", template: "%s | Services" },
};

const OpenTicket = () => <OpenTicketPage />;

export default OpenTicket;
