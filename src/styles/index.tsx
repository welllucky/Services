"use client";

import { breakpoints } from "./breakpoints";
import GlobalStyle from "./globals";
import { lightTheme } from "./themes";

const colorTheme = lightTheme;

const theme = {
  media: {
    mobileS: `(min-width: ${breakpoints.mobileS})`,
    mobileM: `(min-width: ${breakpoints.mobileM})`,
    mobileL: `(min-width: ${breakpoints.mobileL})`,
    mobileXL: `(min-width: ${breakpoints.mobileXL})`,
    tabletS: `(min-width: ${breakpoints.tabletS})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    laptop: `(min-width: ${breakpoints.laptop})`,
    laptopL: `(min-width: ${breakpoints.laptopL})`,
    desktopS: `(min-width: ${breakpoints.desktopS})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
  },
  ...colorTheme,
};

export * from "./breakpoints";
export * from "./common";
export * from "./themes";

export type ThemeProps = typeof theme;

export { GlobalStyle, theme };
