import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/utils/providers/registry";
import { AppProviders } from "../utils/providers/providers";
import { Suspense } from "react";
import Loading from "./loading";

import { SpeedInsights } from "@vercel/speed-insights/next";

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
	icons:["/favicon.ico","/favicon-16x16.png","/favicon-32x32.png","/android-chrome-192x192.png","/android-chrome-512x512.png"],
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
				<SpeedInsights />
				<AppProviders>
					{/* <Suspense fallback={<Loading />}> */}
						<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
					{/* </Suspense> */}
				</AppProviders>
			</body>
		</html>
	);
}
