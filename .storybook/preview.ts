import { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { darkTheme, lightTheme } from "../src/styles/theme/default/index.ts";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/globals.tsx";
import {
	INITIAL_VIEWPORTS,
	MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: lightTheme,
			dark: darkTheme,
		},
		defaultTheme: "light",
		Provider: ThemeProvider,
		GlobalStyles: GlobalStyle,
	}),
];

const preview: Preview = {
	parameters: {
    layout: "centered",
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
			},
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
