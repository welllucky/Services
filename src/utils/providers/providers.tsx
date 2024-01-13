"use client";

import { GlobalStyle } from "@/styles";
import { lightTheme, darkTheme } from "@/styles";
import { ReactNode, useDebugValue } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { AppProvider } from "..";
import { Toaster } from "react-hot-toast";
// skipcq: JS-0323
const AppProviders = ({ children }: any & ReactNode) => {
  const isDarkMode = false;

  useDebugValue(isDarkMode ? "Dark Mode" : "Light Mode");
  return (
    <SWRConfig>
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
    </SWRConfig>
  );
};

export { AppProviders };
