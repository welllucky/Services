"use client";

import { theme, GlobalStyle } from "@/styles";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import { AppProvider } from "../stores/AppStore";
import StyledComponentsRegistry from "./registry";
// skipcq: JS-0323
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppProviders = ({ children }: any & ReactNode) => {
  return (
    <SWRConfig>
      <CookiesProvider
        defaultSetOptions={{
          path: "/",
          sameSite: true,
          secure: true,
          domain: process.env.BASE_URL,
          expires: new Date(Date.now() + 60 * 60 * 24 * 15),
          partitioned: false,
        }}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </StyledComponentsRegistry>
      </CookiesProvider>
    </SWRConfig>
  );
};
