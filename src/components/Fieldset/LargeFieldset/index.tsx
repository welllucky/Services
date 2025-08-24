import { ReactNode } from "react";

import { theme } from "@/styles";

import { CustomFieldset } from "..";

type LargeFieldsetProps = {
  children: ReactNode | string;
  title: string;
  height?: string;
  width?: string;
  padding?: string;
};

export const LargeFieldset = ({
  children,
  title,
  height,
  padding = "1rem",
  width = "100%",
}: LargeFieldsetProps) => (
  <CustomFieldset
    color={theme.colors.primary.default}
    labelText={title}
    width={width}
    $maxHeight={height}
    $minHeight={height ?? "10rem"}
    padding={padding}
    $justifyContent="center">
    {children}
  </CustomFieldset>
);
