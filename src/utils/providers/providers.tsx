"use client";

import { GlobalStyle, theme } from "@/styles";
import { ReactNode, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
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
    <SWRConfig>
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
            <AuthProvider>
              <AppProvider>
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
          </ThemeProvider>
        </StyledComponentsRegistry>
      </CookiesProvider>
    </SWRConfig>
  );
};
