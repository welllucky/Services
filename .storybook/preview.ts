import { withThemeFromJSXProvider } from "@storybook/addon-themes";
// @ts-ignore
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";
import { darkTheme, lightTheme } from "../src/styles/themes";

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
    mockAddonConfigs: {
      globalMockData: [
        {
          // An array of mock objects which will add in every story
          url: "http://localhost:0000",
          method: "PUT",
          status: 200,
          response: {},
        },
      ],
      ignoreQueryParams: true, // Whether or not to ignore query parameters globally
      refreshStoryOnUpdate: true, // This property re-renders the story if there's any data changes
      disableUsingOriginal: false, // This property disables the toggle (on/off) option to use the original endpoint
      disable: true, // This property disables the panel from all the stories
    },
  },
  tags: ["autodocs"]
};

export default preview;
