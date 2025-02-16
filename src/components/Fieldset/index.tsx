import { buildTestIds } from "@/utils/functions";
import { ReactNode } from "react";
import { FieldSetContent, Fieldset, FieldsetContainer, Legend } from "./styles";

export type FieldsetProps = {
  children: ReactNode;
  labelText: string;
  color?: string;
  $justifyContent?: "start" | "center" | "end";
};

const CustomFieldset = ({
  children,
  labelText,
  color,
  $justifyContent = "end",
}: FieldsetProps) => (
  <FieldsetContainer
    color={color}
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
