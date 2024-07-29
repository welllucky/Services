import { theme } from "@/styles";
import { ReactNode } from "react";
import { CustomFieldset } from "..";

type LargeFieldsetProps = {
  children: ReactNode | string;
  title: string;
};

export const LargeFieldset = ({ children, title }: LargeFieldsetProps) => (
  <CustomFieldset
    color={theme.colors.primary.default}
    labelText={title}
    width="100%"
    $minHeight="10rem"
    $hasOverflow
    $justifyContent="start">
    {children}
  </CustomFieldset>
);
