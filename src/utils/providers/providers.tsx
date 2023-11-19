"use client";

import { GlobalStyle } from "@/styles";
import { lightTheme, darkTheme } from "@/styles";
import { ReactNode, useDebugValue } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { AppProvider } from "..";
import { useDarkMode } from "usehooks-ts";

const AppProviders = ({ children }: any & ReactNode) => {
	// const { isDarkMode } = useDarkMode(false);
	const isDarkMode = false;

	useDebugValue(isDarkMode ? "Dark Mode" : "Light Mode");
	return (
		<SWRConfig>
			<AppProvider>
				<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
					<GlobalStyle />
					{children}
				</ThemeProvider>
			</AppProvider>
		</SWRConfig>
	);
};

export { AppProviders };
