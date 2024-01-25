import { RequestsPage } from "@/screens/solicitacoes";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title:  "Solicitações",
};

export default function Requests() {
	return <RequestsPage />;
}
