import { breakpoints } from "./breakpoints";
import {
  lightTheme,
  // darkTheme
} from "./themes";

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

export * from "./globals";
export * from "./themes";
export * from "./common";
export * from "./breakpoints";

export type ThemeProps = typeof theme;

export { theme };
