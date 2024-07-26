import { buildTestIds } from "@/utils/functions";
import { ReactNode } from "react";
import { FieldSetContent, Fieldset, FieldsetContainer, Legend } from "./styles";

export type FieldsetProps = {
  children: ReactNode;
  labelText: string;
  width?: string;
  maxHeight?: string;
  minHeight?: string;
  color?: string;
  $hasOverflow?: boolean;
  $justifyContent?: "start" | "center" | "end";
};

const CustomFieldset = ({
  children,
  labelText,
  maxHeight,
  minHeight,
  width,
  color,
  $hasOverflow = false,
  $justifyContent = "end",
}: FieldsetProps) => (
  <FieldsetContainer
    width={width}
    maxHeight={maxHeight}
    minHeight={minHeight}
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

export { CustomFieldset };
