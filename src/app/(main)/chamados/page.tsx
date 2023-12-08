import Homepage from "@/screens/home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: { default: "Meus chamados", template: "%s | Services" },
  
};

export default function Tickets() {
	return (
		<>
			<Homepage />
		</>
	);
}
