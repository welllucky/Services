import { MyCallsPage } from "@/screens/meus-chamados";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus chamados"
};

export default function Tickets() {
  return (
    <>
      <MyCallsPage />
    </>
  );
}
