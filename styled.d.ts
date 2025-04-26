// styled.d.ts
import { ThemeProps } from "@/styles";
import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends ThemeProps {}
}
