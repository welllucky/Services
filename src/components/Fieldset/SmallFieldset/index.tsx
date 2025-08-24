import { ReactNode } from "react";

import { theme } from "@/styles";

import { CustomFieldset } from "..";

type SmallFieldsetProps = {
  children: ReactNode | string;
  title: string;
  height?: string;
  width?: string;
  padding?: string;
};

export const SmallFieldset = ({
  children,
  title,
  height,
  padding = "1rem",
  width = "100%",
}: SmallFieldsetProps) => (
  <CustomFieldset
    color={theme.colors.primary.default}
    labelText={title}
    width={width}
    $maxHeight={height}
    $minHeight={height}
    padding={padding}
    $justifyContent="center">
    {children}
  </CustomFieldset>
);
