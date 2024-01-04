import { RequestsPage } from "@/screens/solicitacoes";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: { default: "Chamados solicitados", template: "%s | Services" },
};

export default function Requests() {
	return <RequestsPage />;
}
