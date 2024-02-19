import { lightTheme } from "./light";
// import { darkTheme } from "./dark";

type ThemeProps = typeof lightTheme;

lightTheme satisfies ThemeProps;
// darkTheme satisfies ThemeProps;

export { lightTheme };
