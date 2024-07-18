import { MyCallsPage } from "@/screens/meus-chamados";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus chamados",
};

const Tickets = () => {
  return <MyCallsPage />;
};

export default Tickets;
