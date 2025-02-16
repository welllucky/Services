import { buildTestIds } from "@/utils/functions";
import { ReactNode } from "react";
import { FieldSetContent, Fieldset, FieldsetContainer, Legend } from "./styles";

export type FieldsetProps = {
  children: ReactNode;
  labelText: string;
  color?: string;
  $justifyContent?: "start" | "center" | "end";
  $alignItems?: "start" | "center" | "end";
  width?: string;
  height?: string;
  $minHeight?: string;
  $maxHeight?: string;
  padding?: string;
};

const CustomFieldset = ({
  children,
  labelText,
  color,
  width,
  height,
  $maxHeight,
  $minHeight,
  $justifyContent = "end",
  $alignItems,
  padding,
}: FieldsetProps) => (
  <FieldsetContainer
    color={color}
    width={width}
    height={height}
    $minHeight={$minHeight}
    $maxHeight={$maxHeight}
    $alignItems={$alignItems}
    padding={padding}
    {...buildTestIds(`fieldset-container-${labelText}`)}>
    <Legend {...buildTestIds(`legend-text-${labelText}`)}>{labelText}</Legend>
    <Fieldset
      {...buildTestIds(`fieldset-${labelText}`)}
      color={color}
      $justifyContent={$justifyContent}>
      <FieldSetContent>{children}</FieldSetContent>
    </Fieldset>
  </FieldsetContainer>
);

export { CustomFieldset };
