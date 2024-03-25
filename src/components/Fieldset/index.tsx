import { buildTestIds } from "@/utils/functions";
import { ReactNode } from "react";
import { FieldSetContent, Fieldset, FieldsetContainer, Legend } from "./styles";

export type FieldsetProps = {
  children: ReactNode;
  labelText: string;
  width?: string;
  height?: string;
  color?: string;
  $hasOverflow?: boolean;
  $justifyContent?: "start" | "center" | "end";
};

const CustomFieldset = ({
  children,
  labelText,
  height,
  width,
  color,
  $hasOverflow = false,
  $justifyContent = "end",
}: FieldsetProps) => {
  return (
    <FieldsetContainer
      width={width}
      height={height}
      $hasOverflow={$hasOverflow}>
      <Legend {...buildTestIds(`legend-text-${labelText}`)}>{labelText}</Legend>
      <Fieldset
        {...buildTestIds(`fieldset-container-${labelText}`)}
        color={color}
        $hasOverflow={$hasOverflow}
        $justifyContent={$justifyContent}>
        <FieldSetContent>{children}</FieldSetContent>
      </Fieldset>
    </FieldsetContainer>
  );
};

export { CustomFieldset };
