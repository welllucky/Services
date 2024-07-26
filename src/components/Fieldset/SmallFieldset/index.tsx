import { theme } from "@/styles";
import { ReactNode } from "react";
import { CustomFieldset } from "..";

type SmallFieldsetProps = {
  children: ReactNode | string;
  title: string;
};

export const SmallFieldset = ({ children, title }: SmallFieldsetProps) => (
  <CustomFieldset
    color={theme.colors.primary.default}
    labelText={title}
    width="100%"
    $justifyContent="center"
    $hasOverflow>
    {children}
  </CustomFieldset>
);
