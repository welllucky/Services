import { MyCallsPage } from "@/screens/MyTickets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus chamados",
};

const Tickets = () => {
  return <MyCallsPage />;
};

export default Tickets;
