"use client";

import { lightTheme, darkTheme, GlobalStyle } from "@/styles";
import { ReactNode, useDebugValue } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import { AppProvider } from "../stores/useAppContext";
// skipcq: JS-0323
const AppProviders = ({ children }: any & ReactNode) => {
  const isDarkMode = false;

  useDebugValue(isDarkMode ? "Dark Mode" : "Light Mode");
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
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
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
        </AppProvider>
      </CookiesProvider>
    </SWRConfig>
  );
};

export { AppProviders };
