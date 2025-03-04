"use client";

import { GlobalStyle, theme } from "@/styles";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";
import { Monitoring } from "react-scan/monitoring/next";
import { ThemeProvider } from "styled-components";
import packageJson from "../../../package.json";
import { AppProvider } from "../stores/AppStore";
import { AuthProvider } from "./AuthProvider";
import StyledComponentsRegistry from "./registry";

declare global {
  interface Window {
    version: string;
  }
}

export const AppProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.version = packageJson.version;
  }, []);
  return (
    // <SWRConfig>
    <CookiesProvider
      defaultSetOptions={{
        path: "/",
        sameSite: true,
        secure: true,
        domain: process.env.NEXT_PUBLIC_BASE_URL,
        expires: new Date(Date.now() + 60 * 60 * 24 * 15),
        partitioned: false,
      }}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <SessionProvider>
            <AuthProvider>
              <AppProvider>
                <Monitoring
                  apiKey="WEMYJ-Y4IUmZjN8cEufccWZAKd_SyXN_" // Safe to expose publically
                  url="https://monitoring.react-scan.com/api/v1/ingest"
                  commit={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
                  branch={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}
                />
                <GlobalStyle />
                {children}
                <Toaster
                  position="top-center"
                  toastOptions={{
                    ariaProps: {
                      role: "status",
                      "aria-live": "polite",
                    },
                    className: "services-message-toast",
                    position: "top-center",
                  }}
                />
              </AppProvider>
            </AuthProvider>
          </SessionProvider>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </CookiesProvider>
    // </SWRConfig>
  );
};
