import { CreateTicketPage } from "@/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: { default: `Abrir chamado`, template: "%s | Services" },
};

export default function Issue() {
	return (
		<>
			<CreateTicketPage />
		</>
	);
}
