import { RequestsPage } from "@/screens/solicitacoes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitações",
};

const Requests = () => {
  return <RequestsPage />;
};

export default Requests;
