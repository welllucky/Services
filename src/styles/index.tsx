import {
  lightTheme,
  // darkTheme
} from "./themes";

const colorTheme = lightTheme;

const theme = {
  media: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    mobileXL: "480px",
    tabletS: "576px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktopS: "1980px",
    desktop: "2560px",
  },

  ...colorTheme,
};

export * from "./globals";
export * from "./themes";
export * from "./common";
export * from "./breakpoints";

export type ThemeProps = typeof theme;

export { theme };
