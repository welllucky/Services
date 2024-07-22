import { RequestsPage } from "@/screens/Issues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitações",
};

const Requests = () => {
  return <RequestsPage />;
};

export default Requests;
