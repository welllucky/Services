// eslint-disable-next-line import/no-unresolved
import { TextTheme } from "@/types";
import { textThemes } from "./themeTitle";

// eslint-disable-next-line import/prefer-default-export
export const getTextTheme = async (): Promise<TextTheme> => {
  "use server";

  const randomIndex = Math.floor(Math.random() * textThemes.length);
  // eslint-disable-next-line security/detect-object-injection
  return textThemes[randomIndex];
};
