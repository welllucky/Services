import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/utils/providers/registry";
import { AppProviders } from "../utils/providers/providers";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Services",
	description:
		"Desburocratizador de processos de gerenciamento de chamados, bem vindo ao Services.",
	applicationName: "Services",
	creator: "Wellington Braga x SQUAD1",
	authors: [
		{ name: "Wellington Braga" },
		{ name: "Larissa Ferreira" },
		{ name: "Alisson Assunção" },
		{ name: "Pedro Mendonça" },
		{ name: "Cleyton Cabral" },
	],
	category: "Helpdesk",
	icons:
		"https://fercos-s3-ecommerce.s3.amazonaws.com/favicon/apple-touch-icon.png",
	manifest: "/manifest.json",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<AppProviders>
					<Suspense fallback={<Loading />}>
						<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
					</Suspense>
				</AppProviders>
			</body>
		</html>
	);
}
