/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { enableMapSet, enablePatches } from "immer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { AppProviders } from "../utils/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Services", template: "%s | Services" },
  description:
    "Desburocratizador do gerenciamento de chamados, bem vindo ao Services.",
  applicationName: "Services",
  creator: "Wellington Braga",
  publisher: "L3",
  authors: { name: "Wellington Braga" },
  category: "Helpdesk",
  icons: [
    "/favicon.ico",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/android/android-launchericon-192-192.png",
    "/android/android-launchericon-512-512.png",
  ],
  manifest: "/manifest.json",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  enableMapSet();
  enablePatches();

  return (
    <html lang="pt-br">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <SpeedInsights />
        <AppProviders>
          {children}
          <Analytics />
        </AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;

export const runtime = "nodejs";
