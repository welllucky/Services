"use client";

import { theme, GlobalStyle } from "@/styles";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import { AppProvider } from "../stores/useAppContext";
import StyledComponentsRegistry from "./registry";
// skipcq: JS-0323
const AppProviders = ({ children }: any & ReactNode) => {
  return (
    <SWRConfig>
      <CookiesProvider
        defaultSetOptions={{
          path: "/",
          sameSite: true,
          secure: true,
          domain: process.env.BASE_URL,
          expires: new Date(Date.now() + 60 * 60 * 24 * 15),
          partitioned: false
        }}>
        <AppProvider>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {children}
              <Toaster
                position="top-center"
                toastOptions={{
                  ariaProps: {
                    role: "status",
                    "aria-live": "polite"
                  }
                }}
              />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </AppProvider>
      </CookiesProvider>
    </SWRConfig>
  );
};

export { AppProviders };
