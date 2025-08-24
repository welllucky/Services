"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, Suspense, use, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";
import { Monitoring } from "react-scan/monitoring/next";
import { ThemeProvider } from "styled-components";

import {
  analytics,
  appMonitoringClient,
  featureFlag,
  firebaseAgent,
  servicesFlagsProvider,
} from "@/implementations/client";
import { GlobalStyle, theme } from "@/styles";
import { ConfigType } from "@/types";

import packageJson from "../../../package.json";
import { AppProvider } from "./AppProvider";
import { AuthProvider } from "./AuthProvider";
import StyledComponentsRegistry from "./registry";
import { ServicesProvider } from "./ServicesProvider";

declare global {
  interface Window {
    version: string;
    // eslint-disable-next-line no-unused-vars
    genSecret: (length: number) => void;
  }
}

interface AppProvidersProps {
  children: ReactNode;
  configs: Promise<ConfigType | null>;
}

const AppProviders = ({ children, configs }: AppProvidersProps) => {
  useEffect(() => {
    window.version = packageJson.version;
    window.genSecret = (length: number) => {
      const secret = crypto.getRandomValues(new Uint8Array(length));
      const secretHex = Array.from(secret)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      return secretHex;
    };
  }, []);

  const appConfigs = use(configs);

  return (
    <Suspense>
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
              <AuthProvider appMonitoring={appMonitoringClient}>
                <ServicesProvider
                  openFeatureClient={servicesFlagsProvider}
                  appConfigs={appConfigs}
                  firebaseAgent={firebaseAgent}
                  featureFlag={featureFlag}
                  analytics={analytics}>
                  <Monitoring
                    apiKey="WEMYJ-Y4IUmZjN8cEufccWZAKd_SyXN_"
                    url="https://monitoring.react-scan.com/api/v1/ingest"
                    commit={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
                    branch={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}
                />
                  <GlobalStyle />

                  <AppProvider>{children}</AppProvider>

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
                </ServicesProvider>
              </AuthProvider>
            </SessionProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </CookiesProvider>
    </Suspense>
  );
};

export default AppProviders;
