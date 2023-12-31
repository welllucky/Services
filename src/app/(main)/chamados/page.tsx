import Homepage from "@/screens/home";
import MyCallsPage from "@/screens/meus-chamados";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: { default: "Meus chamados", template: "%s | Services" },
};

export default function Tickets() {
	return (
		<>
			<MyCallsPage />
		</>
	);
}
